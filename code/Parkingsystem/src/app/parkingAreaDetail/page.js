"use client";

import React, { useEffect, useState, use } from "react";
import Layout from "../components/layout/Layout";
import { Elements } from "@stripe/react-stripe-js";
import getStripe from "../../stripe/stripe";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import { useRouter } from "next/navigation";

// Use `use` to unwrap searchParams
function ParkingAreaDetail({ searchParams }) {
  const params = use(searchParams); // unwrap
  const data = JSON.parse(params.data);

  const [price, setPrice] = useState(0);
  const [formData, setFormData] = useState({
    parkingType: "car",
    hours: 1,
  });

  useEffect(() => {
    const totalPrice =
      formData.parkingType === "car"
        ? parseInt(data.pricePerHourCar) * formData.hours
        : parseInt(data.pricePerHourBike) * formData.hours;

    setPrice(totalPrice);
  }, [formData, data]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Layout>
      <div className="bg-gray-100 min-h-screen flex flex-col lg:flex-row justify-around items-center">
        {/* Parking Details */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden w-full lg:w-2/3 max-w-2xl mb-8 lg:mb-0">
          <img
            src={data.imagePath}
            alt={data.name}
            className="w-full h-64 object-cover rounded-t-lg"
          />
          <div className="p-6">
            <h1 className="text-2xl font-semibold mb-4">{data.name}</h1>
            <p className="text-gray-700 mb-4">{data.description}</p>
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Capacity:</span>
              <span>{data.capacity}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Location:</span>
              <span>{data.location}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Price per hour (Car):</span>
              <span>${data.pricePerHourCar}</span>
            </div>
            <div className="flex justify-between mb-4">
              <span className="text-gray-600">Price per hour (Bike):</span>
              <span>${data.pricePerHourBike}</span>
            </div>
          </div>
        </div>

        {/* Stripe Form */}
        <Elements stripe={getStripe()}>
          <ParkingAreaForm
            data={data}
            price={price}
            formData={formData}
            onInputChange={handleInputChange}
          />
        </Elements>
      </div>
    </Layout>
  );
};

// Stripe Payment Form
const ParkingAreaForm = ({ data, price, formData, onInputChange }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);

    try {
      const { error: stripeError, paymentMethod } =
        await stripe.createPaymentMethod({
          type: "card",
          card: cardElement,
        });

      if (stripeError) {
        setError(stripeError.message);
        return;
      }

      const { id } = paymentMethod;
      await axios.post("/api/charge", {
        amount: price,
        id,
      });

      router.push("/success");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded-lg p-6 w-full lg:w-1/3 max-w-lg flex flex-col gap-y-8"
    >
      <h2 className="text-2xl text-center uppercase font-semibold mb-4">
        Reserve Parking
      </h2>

      <div className="mb-4">
        <label htmlFor="parkingType" className="block text-gray-700 font-semibold mb-2">
          Parking Type
        </label>
        <select
          id="parkingType"
          name="parkingType"
          value={formData.parkingType}
          onChange={onInputChange}
          className="outline-none border border-gray-400 border-opacity-30 px-5 py-2 w-full"
        >
          <option value="car">Car</option>
          <option value="bike">Bike</option>
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="hours" className="block text-gray-700 font-semibold mb-2">
          Number of Hours
        </label>
        <input
          type="number"
          id="hours"
          name="hours"
          value={formData.hours}
          onChange={onInputChange}
          min="1"
          className="outline-none border border-gray-400 border-opacity-30 px-5 py-2 w-full"
        />
      </div>

      <div className="price text-blue-600 font-bold text-xl">
        <span className="text-gray-950">Total Price</span>: ${price}
      </div>

      <CardElement className="mt-4" />

      <button
        type="submit"
        className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition duration-300 w-full"
      >
        Proceed to Checkout
      </button>

      {error && <div className="text-red-500 mt-4">{error}</div>}
    </form>
  );
};

export default ParkingAreaDetail;

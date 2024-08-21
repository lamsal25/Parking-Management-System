"use client";

import React from 'react'
import Layout from '@/app/components/layout/Layout'
import Button from "@/app/components/button/Button"
import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";
import { DNA } from "react-loader-spinner";


export default function AddParkingSpot() {
    const router= useRouter()
    const [isLoading, setIsLoading] = useState(false);

    const [parkingArea, setArea] = useState({
        name: "",
        location: "",
        capacity: "",
        imagePath:"",
        pricePerHourCar:"",
        pricePerHourBike:"",
        description:""
    });

    const addSpot = async () => {
        try {
          setIsLoading(true)
          const response =await axios.post("/api/addParkingArea", parkingArea);
          router.push("/admin");
        } catch (error) {
            console.log(error.message);
        }
        finally{
          setIsLoading(false)
        }
    }
    return (
        <Layout>
          
          <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="login-inputs flex flex-col items-center gap-y-8 bg-white shadow-lg rounded-lg p-8 w-2/3">
      {isLoading && (
          <DNA
            visible={true}
            height="80"
            width="80"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
          />
        )}
        <img src="/images/login-images/login-logo.png" width={100} alt="" />
        <div className="add-area flex flex-col gap-y-6 w-full">
          <div className="flex flex-col gap-y-3">
            <label htmlFor="name" className="uppercase font-semibold text-gray-700">
              Parking Area Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter parking area name"
              value={parkingArea.name}
              onChange={(e) => setArea({ ...parkingArea, name: e.target.value })}
              className="outline-none border placeholder:text-gray-500 border-gray-300 rounded-md px-5 py-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col gap-y-3">
            <label htmlFor="location" className="uppercase font-semibold text-gray-700">
              Parking Area Location
            </label>
            <input
              id="location"
              type="text"
              placeholder="Location e.g. Kamaladi"
              value={parkingArea.location}
              onChange={(e) => setArea({ ...parkingArea, location: e.target.value })}
              className="outline-none border placeholder:text-gray-500 border-gray-300 rounded-md px-5 py-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col gap-y-3">
            <label htmlFor="capacity" className="uppercase font-semibold text-gray-700">
              Capacity
            </label>
            <input
              id="capacity"
              type="number"
              placeholder="Capacity of Area"
              value={parkingArea.capacity}
              onChange={(e) => setArea({ ...parkingArea, capacity: e.target.value })}
              className="outline-none border placeholder:text-gray-500 border-gray-300 rounded-md px-5 py-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col gap-y-3">
            <label htmlFor="imagePath" className="uppercase font-semibold text-gray-700">
              Image Path
            </label>
            <input
              id="imagePath"
              type="text"
              placeholder="Image Path"
              value={parkingArea.imagePath}
              onChange={(e) => setArea({ ...parkingArea, imagePath: e.target.value })}
              className="outline-none border placeholder:text-gray-500 border-gray-300 rounded-md px-5 py-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col gap-y-3">
            <label htmlFor="pricePerHourCar" className="uppercase font-semibold text-gray-700">
              Price Per Hour For Car
            </label>
            <input
              id="pricePerHourCar"
              type="number"
              placeholder="Car Price"
              value={parkingArea.pricePerHourCar}
              onChange={(e) => setArea({ ...parkingArea, pricePerHourCar: e.target.value })}
              className="outline-none border placeholder:text-gray-500 border-gray-300 rounded-md px-5 py-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col gap-y-3">
            <label htmlFor="pricePerHourBike" className="uppercase font-semibold text-gray-700">
              Price Per Hour For Bike
            </label>
            <input
              id="pricePerHourBike"
              type="number"
              placeholder="Bike Price"
              value={parkingArea.pricePerHourBike}
              onChange={(e) => setArea({ ...parkingArea, pricePerHourBike: e.target.value })}
              className="outline-none border placeholder:text-gray-500 border-gray-300 rounded-md px-5 py-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col gap-y-3">
            <label htmlFor="description" className="uppercase font-semibold text-gray-700">
              Description
            </label>
            <textarea
              id="description"
              placeholder="Description"
              value={parkingArea.description}
              onChange={(e) => setArea({ ...parkingArea, description: e.target.value })}
              className="outline-none border placeholder:text-gray-500 border-gray-300 rounded-md px-5 py-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div className="btn flex gap-x-3">
            <Button
              title={"Add Spot"}
              bgcolor={"#1F51FF"}
              padL={10}
              padT={3}
              color={"white"}
              event={addSpot}
              className="hover:bg-blue-700 transition duration-300 ease-in-out"
            />
          </div>
        </div>
      </div>
    </div>
        </Layout>
    )
}

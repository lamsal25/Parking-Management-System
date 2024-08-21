"use client";
import React from "react";
import Layout from "../components/layout/Layout";
import { useState } from "react";
import Button from "../components/button/Button";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useRouter } from "next/navigation";
import axios from "axios";
import { DNA } from "react-loader-spinner";

export default function Register() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const onRegister = async () => {
    try {
      setIsLoading(true);
      const response = await axios.post("/api/register", user);
      router.push("/login");
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <Layout>
      <div className="container mx-auto p-10 flex justify-between items-center">
        <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide number-slide1">
            <img src="./images/register-images/img1.avif" alt="" />
          </div>
          {/* <div className="keen-slider__slide number-slide2"><img src="./images/register-images/img2.jpg" alt="" /></div>
                    <div className="keen-slider__slide number-slide3"><img src="./images/register-images/img3.jpg" alt="" /></div> */}
        </div>

        <div className="login-inputs flex flex-col items-center gap-y-8 bg-gray-50 w-2/3 px-10 py-5">
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
          <img src="./images/login-images/login-logo.png" width={100} alt="" />
          <h2 className=" text-xl uppercase font-semibold text-blue-600">
            Register New Account
          </h2>

          <div className="user-inputs flex flex-col gap-y-6">
          
            <div className="flex flex-col gap-y-3">
              {/* For Name  */}
              <div className=" flex flex-row gap-x-3">
                <div className="container flex flex-col gap-y-3">
                  <label
                    htmlFor="Name"
                    className="uppercase font-semibold text-sm"
                  >
                    First Name
                  </label>
                  <input
                    id="first-name"
                    type="text"
                    placeholder="Enter your First Name"
                    value={user.firstName}
                    onChange={(e) =>
                      setUser({ ...user, firstName: e.target.value })
                    }
                    className=" outline-none border placeholder:text-gray-500 border-gray-400 border-opacity-30 px-5 py-2"
                  />
                </div>

                <div className="container flex flex-col gap-y-3">
                  <label
                    htmlFor="Name"
                    className="uppercase font-semibold text-sm"
                  >
                    Last Name
                  </label>
                  <input
                    id="last-name"
                    type="text"
                    placeholder="Enter your Last Name"
                    value={user.lastName}
                    onChange={(e) =>
                      setUser({ ...user, lastName: e.target.value })
                    }
                    className=" outline-none border placeholder:text-gray-500 border-gray-400 border-opacity-30 px-5 py-2"
                  />
                </div>
              </div>

              {/* For Email */}
              <div className="flex flex-col gap-y-3">
                <label
                  htmlFor="email"
                  className="uppercase font-semibold text-sm"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={user.email}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                  className=" outline-none border placeholder:text-gray-500 border-gray-400 border-opacity-30 px-5 py-2"
                />
              </div>

              {/* For Password */}
              <div className="flex flex-col gap-y-3">
                <label
                  htmlFor="password"
                  className="uppercase font-semibold text-sm"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={user.password}
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
                  className=" outline-none border border-gray-400 border-opacity-30 px-5 py-2  placeholder:text-gray-500"
                />
              </div>

              {/* Register Button */}
              <div className="btn">
                <Button
                  title={"Register Now"}
                  bgcolor={"#1F51FF"}
                  padL={10}
                  padT={3}
                  color={"white"}
                  event={onRegister}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

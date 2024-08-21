"use client";
import React, { useContext } from "react";
import Layout from "../components/layout/Layout";
import { useState } from "react";
import Button from "../components/button/Button";
import { useKeenSlider } from "keen-slider/react";
import { useRouter } from "next/navigation";
import axios from "axios";
import "keen-slider/keen-slider.min.css";
import Link from "next/link";
import Logincontext from "../context/logincontext/LoginContext";
import { DNA } from "react-loader-spinner";

export default function Login() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
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
    email: "",
    password: "",
  });
  const onLogin = async () => {
    try {
      setIsLoading(true);
      const response = await axios.post("/api/login", user);
      localStorage.setItem("isLoggedIn", "true");
      
      if(response.data.message=="isAdmin"){
        router.push("/admin")
      }
      else{
        router.push("/")
      }
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
            <img src="/images/login-images/login-img-1.png" alt="" />
          </div>
        </div>

        <div className="login-inputs flex flex-col items-center gap-y-8 bg-gray-50 w-2/3 px-2 py-5">
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
          <h2 className=" text-xl uppercase font-semibold text-blue-600">
            Login to your account
          </h2>
          <div className="user-inputs flex flex-col gap-y-6">
            <div className="flex flex-col gap-y-3">
              <label htmlFor="email" className="uppercase font-semibold">
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
            <div className="flex flex-col gap-y-3">
              <label htmlFor="password" className="uppercase font-semibold">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                className=" outline-none border border-gray-400 border-opacity-30 px-5 py-2  placeholder:text-gray-500"
              />
            </div>
            
            <div className="btn flex gap-x-3">
              <Button
                title={"Login"}
                bgcolor={"#1F51FF"}
                padL={10}
                padT={3}
                color={"white"}
                event={onLogin}
              />
              <Link href={"/register"}>
                
                <Button
                  title={"Register"}
                  bgcolor={"#1F51FF"}
                  padL={10}
                  padT={3}
                  color={"white"}
                />
              </Link>
             
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

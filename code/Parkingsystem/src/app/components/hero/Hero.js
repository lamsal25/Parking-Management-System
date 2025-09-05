"use client";
import React, { useContext, useState } from "react";
import { Chakra_Petch } from "next/font/google";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Button from "../button/Button";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Logincontext from "@/app/context/logincontext/LoginContext";
import AvailableParkingAreas from "@/app/availableParkingAreas/page";

const chakra_petch = Chakra_Petch({ subsets: ["latin"], weight: ["600"] });

export default function Hero({id}) {
  const router= useRouter()
  const {isLoggedIn}= useContext(Logincontext)

  const onParkingAreaClick=()=>{
    if(isLoggedIn){
      router.push('/availableParkingAreas')
    }
    else{
      router.push('/login')
    }
  }
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

  return (
    <div id={id}>
      <div className=" w-full h-9v relative">
        <div className="px-5 flex items-center justify-between">
          <div className="text-black flex flex-col gap-y-10 px-5">
            <h2
              className={`text-4xl uppercase leading-snug ${chakra_petch.className}`}  //leading snug = line height
            >
              {" "}
              <span className=" text-blue-500">welcome</span> to <br /> the
              parking <br /> management system
            </h2>
            <p className=" leading-snug text-lg"> 
              Seamlessly streamline your parking operations with our intuitive
              web app. Simplify reservations, optimize space utilization, and
              enhance customer satisfaction.{" "}
            </p>
            <div className="flex gap-5">
              <Button title={"Available Parking Slots"} event={onParkingAreaClick} bgcolor={"black"} color={"#F0FFFF"} padL={10} padT={5}/>
              {/* <Button title={"Learn More"} bgcolor={"black"} color={"#F0FFFF"} padL={10} padT={5}/> */}
            </div>
          </div>
          <div ref={sliderRef} className="keen-slider">
            <div className="keen-slider__slide number-slide1"><img src="./images/hero-img.png" alt="" /></div>
            <div className="keen-slider__slide number-slide2"><img src="./images/hero-img-1.png" alt="" /></div>
            <div className="keen-slider__slide number-slide3"><img src="./images/hero-img-2.png" alt="" /></div>
           
          </div>

          
        </div>
      </div>
    </div>
  );
}

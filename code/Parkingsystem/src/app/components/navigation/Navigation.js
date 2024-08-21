"use client"
import Link from "next/link";
import React, { useContext,useEffect } from "react";
import Button from "../button/Button";
import { useRouter } from "next/navigation";
import axios from "axios";
import Logincontext from "@/app/context/logincontext/LoginContext";


export default function Navigation() {
  const router= useRouter()
  const {isLoggedIn,setIsLoggedIn}= useContext(Logincontext)
  
  const handleLogout=async ()=>{
    const response= await axios.get("/api/logout")
    localStorage.setItem("isLoggedIn",'false')
    setIsLoggedIn(false)
    router.push("/")
  }
  
  useEffect(() => {
    const loggedIn = (localStorage.getItem('isLoggedIn')==='false'||localStorage.getItem('isLoggedIn')==null)?false:true;
    setIsLoggedIn(loggedIn);
    console.log(isLoggedIn)
  }, [isLoggedIn]);

  return (
    <div data-testid="navigation-bar">
      <div className="navigation-bar py-2 bg-gray-950 text-white ">
        <div className=" container w-5/6 mx-auto flex justify-between items-center">
          <div className="logo">
            <Link href={'/'}> <img src="/images/logo-img.png" alt="EasyWayPark" /></Link>
          </div>
        <div className="nav-items flex gap-8 text-sm uppercase ">
            <Link href={"/"} className="hover:scale-105 transition-all">Home</Link>
            <Link href={""} className="hover:scale-105 transition-all">About Us</Link>
            <Link href={"/contact"} className="hover:scale-105 transition-all">Contact</Link>
        </div>
          
          
          {isLoggedIn?  (
        <div>
          <Button title={"Logout"} event={handleLogout} />
        </div>
      ) : (
        
         <div className="login-register flex gap-6 text-sm">
            <Link href={"./login"}><Button title={"Login"} /></Link>
            <Link href={"./register"}><Button title={"Register"} /></Link>
          </div>
      )}
      
        </div>
      </div>
    </div>
  );
}

"use client"
import React from 'react'
import Layout from '@/app/components/layout/Layout'
import Link from 'next/link'
import Feature from '@/app/admin/feature/feature'
import { Chakra_Petch } from "next/font/google";

const chakra_petch = Chakra_Petch({ subsets: ["latin"], weight: ["600"] });

export default function Admin() {
    return (
        <Layout>
            <div className="container p-10 pr-24 pl-24 flex justify-between items-center bg-gradient-to-r from-blue-100 to-blue-50 shadow-md rounded-lg">
    <div className="container p-10 bg-white shadow-md rounded-lg">
        <h2 className="text-3xl font-sans">
            Welcome <span className={`text-blue-500 underline text-4xl leading-snug ${chakra_petch.className}`}>Admin</span>!
        </h2>
    </div>
</div>

<div className="p-10">
    <hr className="border-gray-300" />
</div>

<div className="flex flex-col mb-10">
    <div className="container p-10 text-center bg-gradient-to-r from-blue-100 to-blue-50 shadow-md rounded-lg">
        <h2 className={`text-blue-500 text-4xl font-semibold leading-snug ${chakra_petch.className}`}>Features</h2>
    </div>
    <div className="flex flex-row justify-between gap-10 p-10 pr-24 pl-24">
        <Link href="/admin/addParkingSpot" className="hover:scale-105 transform transition-transform duration-300 w-1/3 text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg">
            <Feature text={"Add Parking Area"} />
        </Link>
        <Link href="/admin/viewTotalUsers" className="hover:scale-105 transform transition-transform duration-300 w-1/3 text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg">
            <Feature text={"View Total Users"} />
        </Link>
        <Link href="/admin/viewParkingAreas" className="hover:scale-105 transform transition-transform duration-300 w-1/3 text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg">
            <Feature text={"View Parking Areas"} />
        </Link>
    </div>
</div>


        </Layout>
    )
}

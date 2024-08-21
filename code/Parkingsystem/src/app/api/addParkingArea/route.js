import { connect } from "../../../dbconfig/dbConfig"
import ParkingArea from "../../../models/parkingAreaModel"
import { NextRequest, NextResponse } from "next/server"
import bcryptjs from "bcryptjs"


connect()

export async function POST(request) {
    try {
        const reqBody = await request.json()
        const { name, location, capacity,imagePath,pricePerHourCar,pricePerHourBike,description} = reqBody;
        console.log(reqBody);
        // const area = await ParkingArea.findOne({ name })

        // if (area) {
        //     return NextResponse.json({ error: "Area already exists", status: 400 }
        //     )
        // }

       
        const newArea = new ParkingArea({
            name,
            location,
            capacity,
            imagePath,
            pricePerHourCar,
            pricePerHourBike,
            description
        })

        const savedArea = await newArea.save()

        return NextResponse.json({
            message: "Area Created Succesfully",
            savedArea
        })
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }

}
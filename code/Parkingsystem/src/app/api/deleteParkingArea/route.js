import { connect } from "../../../dbconfig/dbConfig"
import ParkingArea from "../../../models/parkingAreaModel";
import { NextRequest , NextResponse } from "next/server";

export async function POST(request){
    try{
        const reqBody= await request.json()
        const {id}= reqBody
        const deletedArea = await ParkingArea.findByIdAndDelete(id);
        return NextResponse.json({message:"Parking area deleted"},{status:200})

    }catch(error){
        return NextResponse.json({message:error.message},{status:500});
    }
}

import ParkingArea from "../../../models/parkingAreaModel";
import { NextRequest , NextResponse } from "next/server";

export async function GET(req){
    try{

        const areas = await ParkingArea.find();
        console.log(areas);
        return NextResponse.json({areas});

    }catch(error){
        return NextResponse.json({message:error.message},{status:500});
    }
}

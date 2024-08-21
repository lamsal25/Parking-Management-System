
import mongoose from 'mongoose'

const ParkingAreaSchema= new mongoose.Schema({
    name: {type: String,required:true},
    location: { type: String, required: true },
    capacity: { type: Number, required: true },
    imagePath:{type: String, required: true},
    pricePerHourCar:{type: String, required: true},
    pricePerHourBike:{type: String, required: true},
    description:{type: String, required: true}

});
const ParkingArea = mongoose.models.ParkingArea || mongoose.model('ParkingArea', ParkingAreaSchema);

export default ParkingArea;
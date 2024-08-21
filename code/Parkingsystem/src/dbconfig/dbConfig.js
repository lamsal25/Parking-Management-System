import mongoose from "mongoose";

export async function connect(){
    try{
        mongoose.connect(process.env.MONGO_URI)
        const connection= mongoose.connection;
        connection.on('connected',()=>{
            console.log('MongoDB connected Successfully');
        })
        connection.on('error',()=>{
            console.log("MongoDB connection error")
        })

    }catch(error){
        console.log("Something goes wrong");
        console.log(error)
    }
}
"use client"
import React, { useEffect,useState } from 'react'
// import availableParkingSlots from '../../../parkingSlotsData'
import Card from '../components/card/Card'
import Layout from '../components/layout/Layout'
import axios from "axios"
import { DNA } from "react-loader-spinner";

function ParkingArea() {
    const [isLoading, setIsLoading] = useState(false);
    const [availableParkingSlots,setAvailableParkingSlots] = useState([]);
    
    useEffect(()=>{
        getData();
    },[]);

    const getData=async()=>{
        try{
            setIsLoading(true);
            const response = await axios.get('/api/getParkingAreaData');
            console.log(response.data.areas);
            setAvailableParkingSlots(response.data.areas);
        }
        catch(err){
            console.log(err.message)
        }
        finally{
            setIsLoading(false);
        }
    }

  return (
    <Layout>
            <div className='container mx-auto w-5/6 flex gap-y-10 flex-col'>
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
                <span className='text-2xl uppercase text-center font-bold my-4'>Available Parking Slots</span>
                <div className='flex w-6/7 justify-around flex-wrap mx-auto'>
                    {
                        availableParkingSlots.map((item,index)=>(
                            <Card key={item._id} data={item} />
                        ))   
                    }
                </div>
            </div>

    </Layout>
  )
}

export default ParkingArea
import Link from 'next/link'
import React from 'react'

function Card({data}) {
  const sliceDescription=(description)=>{
    const slicedDescription = description.slice(0,45) + "..."
    return slicedDescription
  }
  
  return (
    <Link href={{
        pathname: '/parkingAreaDetail',
        query: { data: JSON.stringify(data) },
      }}>
        <div className="flex flex-wrap justify-center w-full p-4">
          <div className="container max-w-sm border-2 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl">
            <img src={data.imagePath} alt={data.name} className="w-full h-48 object-cover rounded-t-lg"/>
            <div className="p-4">
              <h1 className="text-xl font-semibold mb-2 text-gray-800">{data.name}</h1>
              <span className="block text-gray-600 mb-1">Capacity: {data.capacity}</span>
              <span className="block text-gray-600 mb-1">Location: {data.location}</span>
              <span className="block text-gray-600 mb-2">{sliceDescription(data.description)}</span>
              <div className="flex justify-between">
                <span className="text-blue-500 font-bold">Car: ${data.pricePerHourCar}/hr</span>
                <span className="text-blue-500 font-bold">Bike: ${data.pricePerHourBike}/hr</span>
              </div>
            </div>
          </div>
        </div>
    </Link>
  )
}

export default Card

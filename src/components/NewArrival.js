import React from 'react'
import ShoesCard from './ShoesCard'

const NewArrival = () => {
  return (
    <div  className="my-10 mx-20 max-sm:mx-5">
        <div className='flex justify-between items-center'>
            <h1 className='text-gray-700'>New Arrival</h1>
            <button className='text-green-600'>See All</button>
        </div>
        <div className='flex flex-wrap justify-around mt-5'>
            <ShoesCard width='w-96' padding='p-4'/>
            <ShoesCard width='w-80' padding='p-4'/>
            <ShoesCard width='w-80' padding='p-4'/>
            <ShoesCard width='w-80' padding='p-4'/>
            <ShoesCard width='w-80' padding='p-4'/>
            <ShoesCard width='w-80' padding='p-4'/>
            <ShoesCard width='w-80' padding='p-4'/>
            <ShoesCard width='w-80' padding='p-4'/>
        </div>
    </div>
  )
}

export default NewArrival
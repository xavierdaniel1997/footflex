import React from 'react'
import ShoesCard from './ShoesCard'

const NewArrival = () => {
  return (
    <div  className="mt-8 mx-20 max-sm:mx-5">
        <div className='flex justify-between items-center'>
            <h1 className='text-gray-700'>New Arrival</h1>
            <button className='text-green-600'>See All</button>
        </div>
        <div className='flex flex-wrap justify-around'>
            <ShoesCard/>
            <ShoesCard/>
            <ShoesCard/>
            <ShoesCard/>
            <ShoesCard/>
            <ShoesCard/>
            <ShoesCard/>
            <ShoesCard/>
        </div>
    </div>
  )
}

export default NewArrival
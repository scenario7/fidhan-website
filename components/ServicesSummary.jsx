import React from 'react'
import { Federo, DM_Sans } from "next/font/google";


const federo = Federo({
    weight: ["400"], // Specify weights
    subsets: ["latin"],    // Choose subsets
  });

  const dmsans = DM_Sans({
    weight: ["400"], // Specify weights
    subsets: ["latin"],    // Choose subsets
  });

const ServicesSummary = () => {
  return (
    <div className='px-28'>
        <div className='w-1/2'>

        </div>
        <div className='w-1/2'>
            <h1 className={`${federo.className} text-white text-3xl`}>Explore our Services and Offerings</h1>
        </div>
    </div>
  )
}

export default ServicesSummary
import React from 'react'
import { DM_Sans, Federo } from 'next/font/google'

const federo = Federo({
    weight: ["400"], // Specify weights
    subsets: ["latin"],    // Choose subsets
  });

  const dmsans = DM_Sans({
    weight: ["400"], // Specify weights
    subsets: ["latin"],    // Choose subsets
  });

const AboutUsSummary = () => {
  return (
    <div
    className='h-[400px] outline outline-[#F9C997] outline-1 flex'
    style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1550368566-f9cc32d7392d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
    }}>
        <div className='w-1/2'>

        </div>
        <div className='w-1/2 bg-[#1b1b1b] bg-opacity-70 backdrop-blur-sm px-10 py-10 items-start justify-between flex flex-col'>
            <h2 className={`${federo.className} text-[#F9C997]`}>
                ABOUT US
            </h2>
            <h1 className={`${dmsans.className} text-3xl tracking-tighter`}>
                Learn What we do at Ipsum
            </h1>
            <p className={`${dmsans.className} text-[#b5b5b5] tracking-tighter`}>
            A tribute to natures elegance and timeless beauty. Each piece in this collection captures the delicate intricacies of blooming petals, crafted with precision and adorned with vibrant gemstones to mirror the colors of a blossoming garden.
            </p>
            <button className={`${dmsans.className} outline outline-white px-2 py-1 outline-1 rounded-lg`}>
            Read More &rarr;
            </button>
        </div>
    </div>
  )
}

export default AboutUsSummary
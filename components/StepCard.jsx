import React from 'react'
import { Federo, DM_Sans } from "next/font/google";
import NavBar from "./NavBar";


const federo = Federo({
    weight: ["400"], // Specify weights
    subsets: ["latin"],    // Choose subsets
  });

  const dmsans = DM_Sans({
    weight: ["400", "700", '900'], // Specify weights
    subsets: ["latin"],    // Choose subsets
  });

const StepCard = ({props}) => {
  return (
    <div className='flex items-start text-left gap-3'>
        <h2 className={`${dmsans.className} font-black text-6xl md:text-8xl bg-gradient-to-tr from-[#fbd1a3] to-[#C08E58] inline-block text-transparent bg-clip-text`}>{props.number}</h2>
        <div className='flex flex-col items-start md:gap-2'>
            <h3 className={`${dmsans.className} text-xl md:text-2xl font-bold tracking-tighter`}>{props.title}</h3>
            <p className={`${dmsans.className} text-sm md:text-md text-black tracking-tight`}>{props.desc}</p>
        </div>
    </div>
  )
}

export default StepCard
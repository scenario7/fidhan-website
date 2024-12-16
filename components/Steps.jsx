import React from 'react'
import { Federo, DM_Sans } from "next/font/google";
import NavBar from "./NavBar";
import StepCard from './StepCard';


const federo = Federo({
    weight: ["400"], // Specify weights
    subsets: ["latin"],    // Choose subsets
  });

  const dmsans = DM_Sans({
    weight: ["400", "500", "600"], // Specify weights
    subsets: ["latin"],    // Choose subsets
  });

  const steps = [
    {
        number: "1",
        title: "Develop Design",
        desc: "We begin by understanding your vision and ideas, collaborating to refine the concept until it's exactly what you envisioned."
    },
    {
        number: "2",
        title: "Quotation & Confirmation",
        desc: "We provide a detailed quote outlining cost, materials, and time frame. Once approved, we confirm all details to move forward."
    },
    {
        number: "3",
        title: "Order",
        desc: "Upon design and quote approval, we’re ready to start the production process and bring your vision to life."
    },
    {
        number: "4",
        title: "Production",
        desc: "With attention to detail and expert craftsmanship, we create your jewelry to meet your exact specifications."
    },
    {
        number: "5",
        title: "Packing & Final Quality Check",
        desc: "After production, each piece undergoes a thorough quality check and is carefully packed for delivery."
    },
    {
        number: "6",
        title: "Shipping",
        desc: "Once everything is ready, we ship your order directly to you, ensuring it reaches you in perfect condition."
    }
];

const Steps = () => {
  return (
    <div className='flex flex-col items-center gap-5 px-10 md:px-28'>
        <h1 className={`${federo.className} text-3xl text-[#C5B692] text-center`}>How the process works</h1>
        <h3 className={`${dmsans.className} text-[#808080] font-semibold tracking-tight text-center pb-10`}>Understand every step of our process to deliver the best to you</h3>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
            {steps.map((step) => {
                return(
                    <StepCard props={step} key={step.number}/>
                )
            })}
        </div>
    </div>
  )
}

export default Steps
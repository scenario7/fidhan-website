import React from 'react'
import { Federo, DM_Sans } from "next/font/google";
import NavBar from "./NavBar";
import StepCard from './StepCard';


const federo = Federo({
    weight: ["400"], // Specify weights
    subsets: ["latin"],    // Choose subsets
  });

  const dmsans = DM_Sans({
    weight: ["400"], // Specify weights
    subsets: ["latin"],    // Choose subsets
  });

  const steps = [
    {
        number: "1",
        title: "Develop Design",
        desc: "We start by understanding your vision and ideas. Together, we sketch and refine the concept until it's exactly what you envisioned."
    },
    {
        number: "2",
        title: "Quotation",
        desc: "This outlines the cost, materials needed, and time frame for production. You'll know exactly what to expect in terms of pricing and specifications."
    },
    {
        number: "3",
        title: "Order",
        desc: "With the design and quote approved, we're ready to bring your vision to life. We're as excited as you are to see the final product!"
    },
    {
        number: "4",
        title: "Production",
        desc: "With the design and quote approved, we're ready to bring your vision to life. We're as excited as you are to see the final product!"
    },
    {
        number: "5",
        title: "30% Deposit",
        desc: "With the design and quote approved, we're ready to bring your vision to life. We're as excited as you are to see the final product!"
    },
    {
        number: "6",
        title: "Confirmation",
        desc: "With the design and quote approved, we're ready to bring your vision to life. We're as excited as you are to see the final product!"
    },
    {
        number: "7",
        title: "Packing",
        desc: "With the design and quote approved, we're ready to bring your vision to life. We're as excited as you are to see the final product!"
    },
    {
        number: "8",
        title: "70% Balance",
        desc: "With the design and quote approved, we're ready to bring your vision to life. We're as excited as you are to see the final product!"
    },
    {
        number: "9",
        title: "Shipping",
        desc: "With the design and quote approved, we're ready to bring your vision to life. We're as excited as you are to see the final product!"
    }
];


const Steps = () => {
  return (
    <div className='flex flex-col items-center gap-10 px-10 md:px-28'>
        <h1 className={`${federo.className} text-3xl text-center`}>How the process works</h1>
        <h3 className={`${dmsans.className} text-[#b6b6b6] text-center`}>Understand every step of our process to deliver the best to you</h3>
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
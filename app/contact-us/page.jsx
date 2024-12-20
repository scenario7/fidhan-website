import React from 'react'
import { Federo, DM_Sans } from "next/font/google";
import NavBar from "@/components/NavBar";
import CustomFooter from '@/components/CustomFooter';


const federo = Federo({
    weight: ["400"], // Specify weights
    subsets: ["latin"],    // Choose subsets
});

const dmsans = DM_Sans({
    weight: ["400"], // Specify weights
    subsets: ["latin"],    // Choose subsets
});

const page = () => {
  return (
    <div className='flex flex-col justify-between'>
        <NavBar/>
        <div className='flex md:flex-row flex-col px-10 pb-10 md:px-28 md:text-left text-center justify-between'>
        <div className='flex flex-col items-center md:items-start gap-3 px-10 py-5 md:py-10 md:px-0'>
            <h3 className={`${dmsans.className} text-[#101010] tracking-tight`}>Reach out now for a quote</h3>
            <div className='w-40 md:w-80 bg-gradient-to-r from-[#C5B692] to-[#ffffff] h-[2px]'></div>
            <h1 className={`${federo.className} text-5xl md:text-6xl tracking-tight bg-gradient-to-r from-[#C5B692] to-[#C5B692] inline-block text-transparent bg-clip-text`}>Contact Us</h1>
            <div className={`flex flex-col text-[#101010] ${dmsans.className} tracking-tighter md:w-1/2 gap-5`}>
                <p>Email, call or complete the form to learn how Q Stone Designs can help you with your needs.</p>
                <a href="mailto:sales@qstonejewels.com">sales@qstonejewels.com</a>
                <a href="tel:+917304392332">+91 7304392332</a>
            </div>
        </div>
        <div className='bg-[#C5B692] md:px-10 px-3 py-5 md:py-20 flex flex-col gap-5 md:w-1/2'>
            <form className="flex flex-col gap-5">
                <div className="flex md:flex-row flex-col gap-3">
                    <input 
                        type="text" 
                        placeholder="First Name" 
                        className={`w-full px-3 py-2 bg-[#ffffff] text-[#101010] focus:outline-none focus:ring-2 focus:ring-[#FFFFFF]" ${dmsans.className} tracking-tight`}
                    />
                    <input 
                        type="text" 
                        placeholder="Last Name" 
                        className={`w-full px-3 py-2 bg-[#ffffff] text-[#101010] focus:outline-none focus:ring-2 focus:ring-[#FFFFFF]" ${dmsans.className} tracking-tight`}
                    />
                </div>
                <input 
                    type="email" 
                    placeholder="Email" 
                    className={`w-full px-3 py-2 bg-[#ffffff] text-[#101010] focus:outline-none focus:ring-2 focus:ring-[#FFFFFF]" ${dmsans.className} tracking-tight`}
                />
                <input 
                    type="tel" 
                    placeholder="Phone Number" 
                    className={`w-full px-3 py-2 bg-[#ffffff] text-[#101010] focus:outline-none focus:ring-2 focus:ring-[#FFFFFF]" ${dmsans.className} tracking-tight`}
                />
                <textarea 
                    placeholder="Message" 
                    className={`w-full px-3 py-2 bg-[#ffffff] text-[#101010] focus:outline-none focus:ring-2 focus:ring-[#FFFFFF] resize-none" ${dmsans.className} tracking-tight`}
                    rows="5"
                ></textarea>
                <button 
                    type="submit" 
                    className={`text-[#FFFFFF] px-5 py-2 bg-[#101010] hover:bg-[#ffffff] hover:text-black transition ${dmsans.className} tracking-tight`}
                >
                    Submit
                </button>
            </form>
        </div>
        </div>
        <CustomFooter showLogo={false}/>
    </div>
  )
}

export default page;

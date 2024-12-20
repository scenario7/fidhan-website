import React from 'react'
import { Federo, DM_Sans } from "next/font/google";
import NavBar from "./NavBar";
import Link from 'next/link';
import blackLogo from '@/images/qstone-logo-blackbg.png'
import Image from 'next/image'
import whiteBG from '@/images/logo-white-bg.png'
import { FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa';


const federo = Federo({
    weight: ["400"], // Specify weights
    subsets: ["latin"],    // Choose subsets
  });

  const dmsans = DM_Sans({
    weight: ["400", "500", "600"], // Specify weights
    subsets: ["latin"],    // Choose subsets
  });

const CustomFooter = ({showLogo}) => {
  return (
    <div className='flex flex-col md:flex-row items-center md:items-end justify-between px-10 py-10 w-screen bg-[#C5B692]'>
        <div className='flex flex-col gap-5 items-center md:items-start'>
        <div className='flex gap-5'>
          <FaInstagram className='w-8 h-8 text-[#706853]'/>
          <FaLinkedinIn className='w-8 h-8 text-[#706853]'/>
          <FaYoutube className='w-8 h-8 text-[#706853]'/>
        </div>
        <p className={`text-[#ffffff] text-center md:text-left ${dmsans.className}`}>
        <a href="mailto:sales@qstonejewels.com">sales@qstonejewels.com</a>
        </p>
        </div>
        <div className={`flex flex-col items-end text-right ${dmsans.className} hidden sm:flex text-[#ffffff] font-medium tracking-tight`}>
          <Link href="/">Home</Link>
          <a href='/about-us'>About Us</a>
          <Link href='/services'>Services</Link>
          <a>Contact Us</a>     
      </div>

    </div>
  )
}

export default CustomFooter
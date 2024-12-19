import React from 'react'
import { Federo, DM_Sans } from "next/font/google";
import NavBar from "./NavBar";
import Link from 'next/link';
import blackLogo from '@/images/qstone-logo-blackbg.png'
import Image from 'next/image'
import whiteBG from '@/images/logo-white-bg.png'


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
    <div className='flex flex-col md:flex-row items-center md:items-end justify-between px-10 py-10 w-screen outline-[#C5B692] outline-4 outline-double'>
        <div className='flex flex-col items-center md:items-start'>
          {showLogo === true && (
            <Link href="/" className={`${showLogo ? 'flex' : 'hidden'}`}>
              <Image src={whiteBG} height={60} alt='Logo' className='rounded-full'/>
            </Link>
          )}
        <p className={`text-[#808080] text-center md:text-left ${dmsans.className}`}>
        <a href="">info@qstonedesigns.com</a>
        </p>
        </div>
        <div className={`flex flex-col items-end text-right ${dmsans.className} hidden sm:flex text-[#808080] font-medium tracking-tight`}>
          <Link href="/">Home</Link>
          <a href='/about-us'>About Us</a>
          <Link href='/services'>Services</Link>
          <a>Contact Us</a>     
      </div>

    </div>
  )
}

export default CustomFooter
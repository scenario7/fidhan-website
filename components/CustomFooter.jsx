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
    weight: ["400"], // Specify weights
    subsets: ["latin"],    // Choose subsets
  });

const CustomFooter = () => {
  return (
    <div className='flex flex-col md:flex-row items-center justify-between px-10 py-10 w-screen'>
        <div className='flex flex-col items-center md:items-start gap-10'>
        <Link href="/">
          <Image src={whiteBG} height={90} alt='Logo' className='rounded-full'/>
        </Link>
        <p className={`text-[#808080] text-center md:text-left ${dmsans.className}`}>
        Shop No. 23,<br/>Crystal Plaza Building,<br/>Linking Road, Bandra West,<br/>Mumbai, Maharashtra 400050, India
        </p>
        </div>
        <div className={`flex flex-col items-end text-right ${dmsans.className} hidden sm:flex`}>
          <Link href="/">Home</Link>
          <a href='/about-us'>About Us</a>
          <Link href='/services'>Services</Link>
          <a>Contact Us</a>     
      </div>

    </div>
  )
}

export default CustomFooter
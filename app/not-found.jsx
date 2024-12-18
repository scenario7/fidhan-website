import NavBar from '@/components/NavBar'
import React from 'react'
import { Federo, DM_Sans } from 'next/font/google';
import CustomFooter from '@/components/CustomFooter';
import Link from 'next/link';

const federo = Federo({
  weight: ["400"], // Specify weights
  subsets: ["latin"], // Choose subsets
});

const dmsans = DM_Sans({
  weight: ["400"], // Specify weights
  subsets: ["latin"], // Choose subsets
});

const page = () => {
  return (
    <div className='flex flex-col items-center min-h-screen justify-between'>
        <NavBar/>
        <div>
            <h1 className={`${federo.className} px-10 md:px-28 text-8xl tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-[#C08E58] to-[#C5B692]`}>404</h1>
            <h3 className={`${dmsans.className} tracking-tight text-lg text-center`}>Sorry, we couldn&apos;t find that page.</h3>
        </div>
        <Link href="/" className={`${dmsans.className} tracking-tight text-lg text-center`}>
          Home Page &rarr;
        </Link>
        <CustomFooter showLogo={true}/>
    </div>
  )
}

export default page
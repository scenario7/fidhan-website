import React from 'react'
import { DM_Sans } from 'next/font/google'
import Link from 'next/link'
import blackLogo from '@/images/qstone-logo-blackbg.png'
import Image from 'next/image'

const dmsans = DM_Sans({
    weight : ["400"],
    subsets : ["latin"]
})

const NavBar = () => {
  return (
    <div className='flex flex-col md:flex-row items-center gap-5 justify-between w-full px-10 py-10 text-white'>
      <Link href="/">
        <Image src={blackLogo} height={100} alt='Logo'/>
      </Link>
        <div className={`${dmsans.className} md:text-md text-sm flex gap-5 md:gap-10`}>
            <Link href="/services">Services</Link>
            <a href="/about-us">About</a>
            <a href="/contact-us">Contact</a>
        </div>
    </div>
  )
}

export default NavBar
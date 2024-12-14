import React from 'react'
import { DM_Sans } from 'next/font/google'
import Link from 'next/link'
import blackLogo from '@/images/qstone-logo-blackbg.png'
import whiteBG from '@/images/logo-white-bg.png'
import Image from 'next/image'

const dmsans = DM_Sans({
    weight : ["400", "500", "600"],
    subsets : ["latin"]
})

const NavBar = () => {
  return (
    <div className='flex flex-col md:flex-row items-center gap-5 justify-between w-full px-10 py-10 text-black relative'>
      <Link href="/">
        <Image src={whiteBG} height={90} alt='Logo' className='rounded-full'/>
      </Link>
        <div className={`${dmsans.className} md:text-lg text-sm tracking-tight flex gap-6 md:gap-10`}>
            <Link href="/services">Services</Link>
            <a href="/about-us">About</a>
            <a href="/contact-us">Contact</a>
        </div>
    </div>
  )
}

export default NavBar
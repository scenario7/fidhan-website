import NavBar from '@/components/NavBar'
import React from 'react'
import { Federo, DM_Sans } from "next/font/google";
import handshake from '@/images/handshake.png'
import suitcase from '@/images/suitcase.png'
import microscope from '@/images/microscope.png'
import Image from 'next/image';
import CustomFooter from '@/components/CustomFooter';


const federo = Federo({
    weight: ["400"], // Specify weights
    subsets: ["latin"],    // Choose subsets
  });

  const dmsans = DM_Sans({
    weight: ["400"], // Specify weights
    subsets: ["latin"],    // Choose subsets
  });

const missions = [
    {
        icon : (handshake),
        title : "Expert Craftmanship",
        desc : "Our team of artisans and jewelers bring years of experience in traditional and modern techniques"
    },
    {
        icon : (suitcase),
        title : "B2B Focus",
        desc : "We are dedicated to serving businesses with a customized approach that aligns with your goals"
    },
    {
        icon : (microscope),
        title : "Cutting Edge Technology",
        desc : "We leverage advanced CAD and 3D rendering tools to ensure your designs are as precise as possible"
    }
]

const page = () => {
  return (
    <div className='flex flex-col items-center'>
        <NavBar/>
        <div className='flex flex-col items-center gap-3 px-10 md:px-0'>
            <h3 className={`${dmsans.className} text-[#101010] tracking-tight`}>Learn About What Drives Us</h3>
            <div className='w-40 md:w-80 bg-gradient-to-r from-[#ffffff] via-[#C5B692] to-[#ffffff] h-[2px]'></div>
            <h1 className={`${federo.className} text-5xl md:text-6xl tracking-tight bg-gradient-to-r from-[#C5B692] to-[#C5B692] inline-block text-transparent bg-clip-text pb-5`}>Our Mission</h1>
            <p className={`${dmsans.className} text-black md:text-md tracking-tight md:px-28 text-center`}>Welcome to Q Stone Designs, a family owned jewelry manufacturing company with over 15 years of experience in creating timeless pieces. We are proud to be a 360° jewelry solution provider, supporting businesses from small retailers to large clients, offering everything from design to production. </p>
            <p className={`${dmsans.className} text-black md:text-md tracking-tight md:px-28 text-center`}>Our extensive network of trusted contacts allows us to source the finest diamonds and gemstones and Precious Metals. Our in-house lab-grown diamond facility, launched in 2022, provides an ethical and sustainable alternative. Working with top designers from around the world, we bring your vision to life with unparalleled craftsmanship and creativity.</p>
            <p className={`${dmsans.className} text-black md:text-md tracking-tight md:px-28 text-center`}>Beyond business, we are committed to giving back, supporting impactful initiatives, and promoting ethical practices within the jewelry industry.</p>
        </div>
        <div className='flex flex-col md:flex-row justify-between px-10 gap-10 md:gap-0 md:px-28 md:py-10'>
            {missions.map((mission) => {
                return(
                    <div className='flex flex-col items-center gap-2 md:gap-5' key={mission}>
                        <Image src={mission.icon} className='md:h-16 h-16 object-contain' alt='icon'/>
                        <h3 className={`${dmsans.className} text-xl font-semibold tracking-tight`}>{mission.title}</h3>
                        <p className={`${dmsans.className} text-[#808080] text-center tracking-tight`}>{mission.desc}</p>
                    </div>
                )
            })}
        </div>
        <div className='flex flex-col gap-3 items-center py-10'>
            <h1 className={`${federo.className} text-3xl tracking-tight text-[#C5B692] text-center`}>Why Choose Us?</h1>
            <div className='w-40 md:w-80 bg-gradient-to-r from-[#ffffff] via-[#C5B692] to-[#ffffff] h-[2px]'></div>
            <p className={`${dmsans.className} tracking-tight text-center w-3/4 pt-10`}>At Q Stone Designs, our in-house lab-grown diamond facility and extensive network for sourcing natural stones enable us to offer you competitive rates on both diamonds and gemstones, all certified by IGI and GIA. We provide on-demand designers to collaborate with you or your clients to fulfill custom needs, while our worldwide shipping ensures hassle-free delivery. We support your business growth with cost-effective methods and advanced technology.</p>
        </div>
        <CustomFooter/>
    </div>
  )
}

export default page
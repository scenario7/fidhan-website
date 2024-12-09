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
        <div className='flex flex-col items-center gap-3 py-10 px-10 md:px-0'>
            <h3 className={`${dmsans.className} text-[#d9d9d9] tracking-tight`}>Learn About What Drives Us</h3>
            <div className='w-40 md:w-80 bg-gradient-to-r from-[#101010] via-[#AE7C53] to-[#101010] h-[2px]'></div>
            <h1 className={`${federo.className} text-5xl md:text-6xl tracking-tight bg-gradient-to-r from-[#FFFFFF] to-[#AE7C53] inline-block text-transparent bg-clip-text`}>Our Mission</h1>
            <p className={`${dmsans.className} text-white md:text-md text-sm tracking-tight md:w-1/2 text-center`}>Dedicated to redefining luxury, we craft timeless jewelry that embodies elegance, celebrates individuality, and creates cherished memories for generations to come.</p>
        </div>
        <div className='flex flex-col md:flex-row justify-between px-10 gap-10 md:gap-0 md:px-28 md:py-10'>
            {missions.map((mission) => {
                return(
                    <div className='flex flex-col items-center gap-2 md:gap-5' key={mission}>
                        <Image src={mission.icon} height={70}/>
                        <h3 className={`${dmsans.className} text-xl font-semibold tracking-tight`}>{mission.title}</h3>
                        <p className={`${dmsans.className} text-[#808080] text-center`}>{mission.desc}</p>
                    </div>
                )
            })}
        </div>
        <div className='flex flex-col gap-3 items-center py-10'>
            <h1 className={`${federo.className} text-3xl tracking-tight text-[#F9C997] text-center`}>Why Choose Us?</h1>
            <div className='w-40 md:w-80 bg-gradient-to-r from-[#101010] via-[#AE7C53] to-[#101010] h-[2px]'></div>
            <p className={`${dmsans.className} tracking-tight text-center w-3/4 pt-10`}>At Ipsum, we understand the demands and challenges of the jewelry industry. As a B2B partner, we focus on providing seamless, high-quality jewelry manufacturing and design services to jewelry companies around the world. From independent designers to large retail chains, we are dedicated to helping our clients scale their businesses with precision, efficiency, and a deep understanding of the market.
            <br/>Our team of experts combines decades of experience in jewelry making, design, and sourcing, allowing us to offer innovative solutions that meet the highest standards. Whether you’re looking for rapid prototyping, mass production, or custom gemstone sourcing, we have the tools, expertise, and commitment to turn your ideas into reality.</p>
        </div>
        <CustomFooter/>
    </div>
  )
}

export default page
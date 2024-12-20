import React from 'react'
import { DM_Sans, Federo } from 'next/font/google'
import flower from '@/images/image.png'
import Link from 'next/link';

const federo = Federo({
    weight: ["400"], // Specify weights
    subsets: ["latin"],    // Choose subsets
});

const dmsans = DM_Sans({
    weight: ["400"], // Specify weights
    subsets: ["latin"],    // Choose subsets
});

const AboutUsSummary = () => {
    return (
        <div
            className="outline outline-[#F9C997] outline-1 flex flex-col md:flex-row"
            style={{
                backgroundImage: `url(${flower.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
            }}
        >
            <div className="w-full md:w-1/2 h-[200px] md:h-auto"></div>
            <div className="w-full md:w-1/2 bg-[#fffff0] bg-opacity-70 backdrop-blur-sm gap-5 md:gap-10 px-10 py-10 items-start justify-between flex flex-col">
                <h2 className={`${federo.className} text-[#503314]`}>
                    ABOUT US
                </h2>
                <h1 className={`${dmsans.className} text-3xl tracking-tighter`}>
                    Learn What we do at Q Stone
                </h1>
                <p className={`${dmsans.className} text-[#101010] tracking-tighter`}>
                We are a 360° jewelry solution provider, offering end-to-end services from design to manufacturing. With over 15 years of experience, we specialize in sourcing the finest diamonds, gemstones, and precious metals. Our in-house lab-grown diamond facility provides ethical, sustainable alternatives, and our expert designers bring your vision to life with unmatched craftsmanship.
                </p>
                <Link href="/about-us" className={`${dmsans.className} outline outline-black px-2 py-1 outline-1 rounded-lg hover:bg-black hover:text-white transition`}>
                    Read More &rarr;
                </Link>
            </div>
        </div>
    );
}

export default AboutUsSummary;

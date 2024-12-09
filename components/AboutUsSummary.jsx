import React from 'react'
import { DM_Sans, Federo } from 'next/font/google'
import flower from '@/images/image.png'

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
            <div className="w-full md:w-1/2 bg-[#1b1b1b] bg-opacity-70 backdrop-blur-sm gap-5 md:gap-10 px-10 py-10 items-start justify-between flex flex-col">
                <h2 className={`${federo.className} text-[#F9C997]`}>
                    ABOUT US
                </h2>
                <h1 className={`${dmsans.className} text-3xl tracking-tighter`}>
                    Learn What we do at Ipsum
                </h1>
                <p className={`${dmsans.className} text-[#b5b5b5] tracking-tighter`}>
                    A tribute to natures elegance and timeless beauty. Each piece in this collection captures the delicate intricacies of blooming petals, crafted with precision and adorned with vibrant gemstones to mirror the colors of a blossoming garden.
                </p>
                <button className={`${dmsans.className} outline outline-white px-2 py-1 outline-1 rounded-lg`}>
                    Read More &rarr;
                </button>
            </div>
        </div>
    );
}

export default AboutUsSummary;

import React from 'react';
import { Federo, DM_Sans } from "next/font/google";
import Link from 'next/link';

const federo = Federo({
    weight: ["400"], // Specify weights
    subsets: ["latin"], // Choose subsets
});

const dmsans = DM_Sans({
    weight: ["400"], // Specify weights
    subsets: ["latin"], // Choose subsets
});

const ServiceCard = ({ title, bgImageURL, id }) => {
    return (
        <Link href={`/services/${id}`}>
        <div
            className="flex justify-between items-center px-3 py-7 w-full text-white hover:text-[#706853] rounded-none h-full hover:bg-[#C5B69280] bg-[#C5B692] transition-colors"

        >
            <h2 className={`${federo.className}  text-xl font-bold z-10`}>{title}</h2>
            <svg
                data-slot="icon"
                fill="none"
                strokeWidth="2"
                className="w-5 z-10"
                stroke="#706853"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                ></path>
            </svg>
        </div>
        </Link>
    );
};

export default ServiceCard;

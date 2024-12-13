"use client"
import React, { useState } from 'react';
import { Federo, DM_Sans } from "next/font/google";
import Link from 'next/link';

const federo = Federo({
  weight: ["400"],
  subsets: ["latin"],
});

const dmsans = DM_Sans({
  weight: ["400"],
  subsets: ["latin"],
});

const CollectionCard = ({params}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`md:h-[300px] md:w-[200px] flex items-center justify-center px-2 py-24 relative transition-all duration-300 shadow-sm md:hover:shadow-sm md:shadow-xl shadow-[#adadad]`}
      style={{
        backgroundImage: `linear-gradient(
          to bottom,
          ${hovered ? "#C08E58CC" : "#10101070"},
          ${hovered ? "#C08E58CC" : "#10101070"}
        ), url(${params.imgURL})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {hovered ? (
        <div className="text-white text-center flex flex-col items-center justify-end gap-7">
          <div>
            <h2 className={`${federo.className} text-xl md:text-2xl`}>Get in Touch</h2>
            <p className={`${dmsans.className} text-sm`}>
              Reach out to us to get a quote on this personalised item.
            </p>
          </div>
          <Link
            href="/contact-us"
            className={`${dmsans.className} bg-black text-white w-3/4 py-2 px-2 font-semibold text-sm`}
          >
            Contact Us →
          </Link>
        </div>
      ) : (
        <div className="text-white text-center">
          <h2 className={`${federo.className} text-2xl`}>{params.title}</h2>
          <p className={`${dmsans.className} text-sm`}>{params.subtitle}</p>
        </div>
      )}
    </div>
  );
};

export default CollectionCard;

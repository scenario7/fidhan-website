import React from 'react';
import { Federo, DM_Sans } from "next/font/google";
import NavBar from "./NavBar";


const federo = Federo({
    weight: ["400"], // Specify weights
    subsets: ["latin"],    // Choose subsets
  });

  const dmsans = DM_Sans({
    weight: ["400"], // Specify weights
    subsets: ["latin"],    // Choose subsets
  });


export const NeedsCard = ({ props }) => {
  return (
    <div className="flex flex-col items-center justify-center p-4 rounded-md shadow-md text-center">
      <div className="w-16 h-16 mb-4 bg-[#C08E58] rounded-full p-2">{props.svg}</div>
      <h2 className={`text-md font-bold mb-2 ${dmsans.className} tracking-tight`}>{props.title}</h2>
      <p className={`text-sm text-[#808080] text-center ${dmsans.className}`}>{props.subtitle}</p>
    </div>
  );
};

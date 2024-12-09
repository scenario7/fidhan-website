import React from "react";
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

const HeroSection = () => {
  return (
    <div
      className="md:h-[600px] flex flex-col items-center justify-between gap-16"
      style={{
        backgroundImage: `linear-gradient(to bottom, #101010, #10101090, #101010), url('https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
      }}
    >
        <NavBar/>
        <div className="flex flex-col md:flex-row justify-between px-10 md:px-20 gap-24 md:gap-0">
        <h1 className={`${federo.className} text-5xl md:text-6xl`}>Crafted with excellence,<br/> worn with pride.</h1>
        <p className={`${dmsans.className} md:w-1/4`}>Our curated collection showcases the finest craftsmanship, featuring pieces that radiate sophistication and celebrate the art of adornment.</p>
        </div>
        <button className={`${dmsans.className} outline outline-1 outline-white px-3 py-1 rounded-lg hover:bg-white hover:text-black transition-colors`}>
            Explore Offerings →
        </button>
    </div>
  );
};

export default HeroSection;

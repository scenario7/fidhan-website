import Image from "next/image";
import React from "react";
import { Federo, DM_Sans } from "next/font/google";
import NavBar from "./NavBar";
import Link from "next/link";
import heroBG from "@/images/heroBG.jpg";

const federo = Federo({
  weight: ["400"], // Specify weights
  subsets: ["latin"], // Choose subsets
});

const dmsans = DM_Sans({
  weight: ["400"], // Specify weights
  subsets: ["latin"], // Choose subsets
});

const HeroSection = () => {
  return (
    <div className="relative md:h-[600px] flex flex-col items-center justify-between gap-16">
      {/* Background Image */}
      <Image
        src={heroBG}
        alt="Hero Background"
        fill
        style={{ objectFit: "cover" }}
        priority
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white/30 to-white"></div>

      <NavBar/>
      <div className="relative flex flex-col md:flex-row justify-between px-10 md:px-20 gap-8 mt-20 pt-10 bg-white md:bg-transparent md:gap-0 text-black">
        <h1 className={`${federo.className} text-5xl md:text-6xl`}>
          Jewellery.
          <br />
          Redefined.
        </h1>
        <p className={`${dmsans.className} md:w-1/4`}>
          Our curated collection showcases the finest craftsmanship, featuring
          pieces that radiate sophistication and celebrate the art of
          adornment.
        </p>
      </div>
      <Link
        href="/contact-us"
        className={`${dmsans.className} relative outline outline-1 outline-black px-3 py-1 rounded-lg hover:bg-black hover:text-white transition-colors`}
      >
        Partner With Us →
      </Link>
    </div>
  );
};

export default HeroSection;

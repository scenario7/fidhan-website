import React from 'react'
import { Federo, DM_Sans } from "next/font/google";
import CollectionCard from './CollectionCard';

const federo = Federo({
  weight: ["400"], // Specify weights
  subsets: ["latin"], // Choose subsets
});

const dmsans = DM_Sans({
  weight: ["400"], // Specify weights
  subsets: ["latin"], // Choose subsets
});

const OurCollection = () => {
  return (
    <div className="flex items-center justify-center w-full flex-col gap-10">
      <div className="flex flex-col items-center">
        <div className="flex gap-10 items-center mr-36">
          <h1
            className={`${federo.className} text-8xl tracking-tighter`}
            style={{
              background: "linear-gradient(to right, #FFFFFF, #FFD9B1)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            OUR
          </h1>
          <p className={`${dmsans.className} text-[#FFD9B1]`}>
            A combination of statement and style <br />
            helping you express who you are.
          </p>
        </div>
        <div>
          <h1
            className={`${federo.className} text-8xl tracking-tighter ml-36`}
            style={{
              background: "linear-gradient(to right, #FFFFFF, #FFD9B1)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            COLLECTION
          </h1>
        </div>
      </div>
      <div>
        <div className='flex gap-10 w-full'>
        <CollectionCard name={"RINGS"} imageURL={"https://images.unsplash.com/photo-1511253819057-5408d4d70465?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} subtitle={"Explore our wide collection of customisable rings."}/>
        <CollectionCard name={"NECKLACES"} imageURL="https://images.unsplash.com/photo-1511253819057-5408d4d70465?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" subtitle={"Explore our wide collection of customisable rings."}/>
        <CollectionCard name={"EARRINGS"} imageURL="https://images.unsplash.com/photo-1511253819057-5408d4d70465?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" subtitle={"Explore our wide collection of customisable rings."}/>
        <CollectionCard name={"BRACELETS"} imageURL="https://images.unsplash.com/photo-1511253819057-5408d4d70465?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" subtitle={"Explore our wide collection of customisable rings."}/>
        </div>
      </div>
    </div>
  );
};

export default OurCollection;

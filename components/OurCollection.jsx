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

const collection = [
  {
    title : "RINGS",
    imgURL : "https://images.unsplash.com/photo-1511253819057-5408d4d70465?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    subtitle : "Explore our wide collection of customisable rings."
  },
  {
    title : "NECKLACES",
    imgURL : "https://plus.unsplash.com/premium_photo-1681276170758-d6ca6e6e276a?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    subtitle : "Explore our wide collection of customisable rings."
  },
  {
    title : "BRACELETS",
    imgURL : "https://plus.unsplash.com/premium_photo-1692392182108-e9c8a36a80d9?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    subtitle : "Explore our wide collection of customisable rings."
  },
  {
    title : "EARRINGS",
    imgURL : "https://plus.unsplash.com/premium_photo-1681276169450-4504a2442173?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    subtitle : "Explore our wide collection of customisable rings."
  },
]


const OurCollection = () => {
  return (
    <div className="flex items-center justify-center w-full flex-col gap-10">
      <div className="flex flex-col items-center">
        <div className="flex md:gap-10 gap-3 items-center mr-10 md:mr-36">
          <h1
            className={`${federo.className} text-5xl md:text-8xl tracking-tighter`}
            style={{
              background: "linear-gradient(to right, #FFFFFF, #FFD9B1)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            OUR
          </h1>
          <p className={`${dmsans.className} text-[#FFD9B1] text-xs md:text-md`}>
            A combination of statement and style <br />
            helping you express who you are.
          </p>
        </div>
        <div>
          <h1
            className={`${federo.className} text-5xl md:text-8xl tracking-tighter ml-20 md:ml-36`}
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
        <div className='grid grid-cols-2 md:grid-cols-4 md:gap-10 gap-5 px-5 w-full'>
          {collection.map((col) => {
            return(
              <CollectionCard params={col} key={col}/>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default OurCollection;

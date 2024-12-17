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
    imgURL : "https://images.pexels.com/photos/2849742/pexels-photo-2849742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    subtitle : "Explore our wide collection of customisable rings."
  },
  {
    title : "NECKLACES",
    imgURL : "https://images.pexels.com/photos/7541808/pexels-photo-7541808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    subtitle : "Explore our wide collection of customisable rings."
  },
  {
    title : "BRACELETS",
    imgURL : "https://images.pexels.com/photos/266621/pexels-photo-266621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    subtitle : "Explore our wide collection of customisable rings."
  },
  {
    title : "EARRINGS",
    imgURL : "https://images.pexels.com/photos/25403216/pexels-photo-25403216/free-photo-of-silver-jewelry-on-black-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
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
              background: "linear-gradient(to right, #C08E58, #C5B692)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            OUR
          </h1>
          <p className={`${dmsans.className} text-[#101010] text-xs md:text-md`}>
            A combination of statement and style <br />
            helping you express who you are.
          </p>
        </div>
        <div>
          <h1
            className={`${federo.className} text-5xl md:text-8xl tracking-tighter ml-20 md:ml-36`}
            style={{
              background: "linear-gradient(to right, #C08E58, #C5B692)",
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
              <CollectionCard params={col} key={col._id}/>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default OurCollection;

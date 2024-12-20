import React from 'react'
import { Federo, DM_Sans } from "next/font/google";
import NavBar from "./NavBar";
import { NeedsCard } from './NeedsCard';
import { IoDiamondOutline } from "react-icons/io5";
import { MdOutlineContentCut } from 'react-icons/md'
import { FaHandsHelping } from 'react-icons/fa'

const needs = [
  {
      svg: (
          <svg data-slot="icon" fill="none" strokeWidth="1.2" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"></path>
          </svg>
      ),
      title: "Reliable Supply Chain",
      subtitle: "Backed by high-quality manufacturing facilities for consistent, timely delivery."
  },
  {
      svg: (
          <svg data-slot="icon" fill="none" strokeWidth="1.2" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.712 4.33a9.027 9.027 0 0 1 1.652 1.306c.51.51.944 1.064 1.306 1.652M16.712 4.33l-3.448 4.138m3.448-4.138a9.014 9.014 0 0 0-9.424 0M19.67 7.288l-4.138 3.448m4.138-3.448a9.014 9.014 0 0 1 0 9.424m-4.138-5.976a3.736 3.736 0 0 0-.88-1.388 3.737 3.737 0 0 0-1.388-.88m2.268 2.268a3.765 3.765 0 0 1 0 2.528m-2.268-4.796a3.765 3.765 0 0 0-2.528 0m4.796 4.796c-.181.506-.475.982-.88 1.388a3.736 3.736 0 0 1-1.388.88m2.268-2.268 4.138 3.448m0 0a9.027 9.027 0 0 1-1.306 1.652c-.51.51-1.064.944-1.652 1.306m0 0-3.448-4.138m3.448 4.138a9.014 9.014 0 0 1-9.424 0m5.976-4.138a3.765 3.765 0 0 1-2.528 0m0 0a3.736 3.736 0 0 1-1.388-.88 3.737 3.737 0 0 1-.88-1.388m2.268 2.268L7.288 19.67m0 0a9.024 9.024 0 0 1-1.652-1.306 9.027 9.027 0 0 1-1.306-1.652m0 0 4.138-3.448M4.33 16.712a9.014 9.014 0 0 1 0-9.424m4.138 5.976a3.765 3.765 0 0 1 0-2.528m0 0c.181-.506.475-.982.88-1.388a3.736 3.736 0 0 1 1.388-.88m-2.268 2.268L4.33 7.288m6.406 1.18L7.288 4.33m0 0a9.024 9.024 0 0 0-1.652 1.306A9.025 9.025 0 0 0 4.33 7.288"></path>
          </svg>
      ),
      title: "Competitive Pricing Strategy",
      subtitle: "We offer high quality jewelry at competitive prices, helping your business thrive with the best rates and cost savings."
  },
  {
      svg: (
          <FaHandsHelping className='text-white h-10 w-10'/>
      ),
      title: "Supporting Jewelry Retailers and Brand Owners",
      subtitle: "From design to production, we help retailers succeed and deliver exceptional products to customers."
  },
  {
      svg: (
        <IoDiamondOutline className='text-white h-10 w-10'/>
      ),
      title: "In-House Diamond Manufacturing",
      subtitle: "Expertise in creating sustainable, high-quality diamonds, crafted with precision and ethical sourcing to ensure lasting beauty and value. "
  },
  {
    svg: (
      <MdOutlineContentCut className='text-white h-10 w-10'/>
    ),
    title: "Custom Gemstone Cutting",
    subtitle: "Tailored services to bring your unique designs to life"
},
{
  svg: (
    <svg fill="none" strokeWidth="1.2" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" data-slot="icon">
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z"></path>
</svg>
  ),
  title: "Leased Department Store",
  subtitle: "If you have available space for lease, contact us to showcase our exclusive jewellery in your store"
},
{
  svg: (
    <svg fill="none" strokeWidth="1.2" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" data-slot="icon">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"></path>
</svg>
  ),
  title: "Shops in Shops",
  subtitle: "Partner with us to offer our exquisite jewellery pieces in your existing retail shop."
},
{
  svg: (
    <svg fill="none" strokeWidth="1.2" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" data-slot="icon">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42"></path>
</svg>
  ),
  title: "Custom Designs",
  subtitle: "We create custom jewellery designs tailored to your specific requirements and preferences"
},
  // Add similar objects for "Custom Gemstone Cutting & Fancy Shapes", "Corporate Gifting Solutions", "Ethical Sourcing Practices", and "Ethical Labor Practices"
];

const federo = Federo({
    weight: ["400"], // Specify weights
    subsets: ["latin"],    // Choose subsets
  });

  const dmsans = DM_Sans({
    weight: ["400", "500", "600"], // Specify weights
    subsets: ["latin"],    // Choose subsets
  });

const WholesaleNeeds = () => {
  return (
    <div className='flex flex-col items-center gap-6 px-5 md:px-28'>
        <h1 className={`${federo.className} text-3xl tracking-tight text-[#706853] text-center`}> We understand wholesale needs</h1>
        <h3 className={`${dmsans.className} text-[#808080] font-semibold tracking-tight text-center`}>We recognize the unique demands of your business. Uncover exceptional quality and one-of-a-kind designs that enhance your offerings with every stunning piece.</h3>
        <div className='grid grid-cols-2 md:grid-cols-4 md:py-10 gap-2 md:gap-5 items-stretch'>
            {needs.map((need) => {
                return(
                    <NeedsCard props={need} key={need.title}/>
                )
            })}
        </div>
    </div>
  )
}

export default WholesaleNeeds
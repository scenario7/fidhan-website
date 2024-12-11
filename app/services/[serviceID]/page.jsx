import React from 'react';
import CustomFooter from '@/components/CustomFooter';
import { Federo, DM_Sans } from "next/font/google";
import NavBar from "@/components/NavBar";


const federo = Federo({
    weight: ["400"], // Specify weights
    subsets: ["latin"],    // Choose subsets
  });

  const dmsans = DM_Sans({
    weight: ["400", "600", "700", "800"], // Specify weights
    subsets: ["latin"],    // Choose subsets
  });

  const services = [
    {
      id: 'jewellery-manufacturing',
      title: 'Jewellery Manufacturing',
      image: 'https://images.unsplash.com/photo-1517348663636-31103cb49587?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: `Qstone Designs is a leading jewelry manufacturer with facilities in both India and Dubai, specializing in high-quality jewelry in gold, diamond, platinum, and silver. Offering 10-24 karats, we focus on precision and attention to detail. Our expertise spans diamond and gemstone settings, catering to diverse retailer needs. We provide customized solutions, ensuring your jewelry is tailored to your exact specifications.`,
      highlights: [
        {
          title: 'Jewelry Model Making',
          description: 'The resin output from CAM is transformed into a silver model, serving as a master design for multiple jewelry pieces.'
        },
        {
          title: 'Jewelry Rubber Mould',
          description: 'Molds are created to facilitate the production of numerous jewelry pieces with identical patterns.'
        },
        {
          title: 'Waxing/Wax Tree',
          description: 'Wax trees are created to replicate jewelry patterns, enabling mass production of identical designs.'
        },
        {
          title: 'Jewelry Casting',
          description: 'A complex procedure where the wax tree is placed in a steel flask with slurry, which solidifies to form the jewelry mold.'
        },
        {
          title: 'Jewelry Grinding',
          description: 'The nub attached to the casting is removed using a motorized grinding machine to smooth the jewelry’s surface.'
        },
        {
          title: 'Jewelry Filling',
          description: 'Specialized tools are used to shape the jewelry into the desired final product.'
        },
        {
          title: 'Jewelry Stone Setting',
          description: 'Skilled artisans securely set stones quickly and accurately into the jewelry.'
        },
        {
          title: 'Jewelry Polishing',
          description: 'Multiple polishing stages are used to achieve a perfect shine on each jewelry piece.'
        },
        {
          title: 'Jewelry Plating',
          description: 'We offer 14K, 18K, rose gold, and rhodium gold plating, depending on customer requirements.'
        }
      ]
    },
    {
      id: 'cad-rendering',
      title: 'CAD and 3D Rendering',
      image: 'https://images.unsplash.com/photo-1501046791521-e24baf06e55b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: `Qstone Designs utilizes advanced CAD and 3D rendering technology to bring your jewelry designs to life. Our detailed virtual models ensure that your designs are realized precisely as envisioned before physical production begins.`,
      highlights: [
        {
          title: 'Jewelry 3D Modeling',
          description: 'Combines traditional craftsmanship with cutting-edge technology to create detailed virtual designs.'
        },
        {
          title: 'Jewelry CAM',
          description: '3D Rapid Prototyping System ensures high accuracy and detail in resin models.'
        },
        {
          title: 'Jewelry Rendering',
          description: 'High-quality visuals for marketing and customer previews, saving time and costs before production.'
        }
      ]
    },
    {
      id: 'diamonds-and-gemstones',
      title: 'Diamonds and Gemstones',
      image: 'https://images.unsplash.com/photo-1547584322-003a00006db0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: `At Qstone Designs, we source top-quality mined and lab-grown diamonds, as well as gemstones from trusted suppliers worldwide. Our expertise in the Four Cs ensures each diamond and gemstone meets the highest standards.`,
      highlights: [
        {
          title: 'Lab-Grown Diamond Manufacturing',
          description: 'Facility in India ensures precision and quality for every lab-grown diamond.'
        },
        {
          title: 'Diverse Diamond Options',
          description: 'Wide variety of diamond shapes, sizes, and clarity ranging from flawless to I1-2.'
        },
        {
          title: 'Ethical and Certified Diamonds',
          description: 'Eco-friendly and ethically sourced diamonds with GIA and IGI certifications.'
        }
      ]
    },
    {
      id: 'jewellery-packaging',
      title: 'Jewellery Packaging Solutions',
      image: 'https://images.unsplash.com/photo-1595246007497-15e0ed4b8d96?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: `Qstone Designs offers bespoke packaging solutions tailored to enhance your brand's image. From luxury boxes to eco-friendly packaging, we ensure your jewelry is beautifully presented and protected.`,
      highlights: [
        {
          title: 'Luxury Box Packaging',
          description: 'Custom boxes crafted with premium materials and personalized branding.'
        },
        {
          title: 'Packaging Warehousing and Distribution',
          description: 'Storage and direct-to-customer shipping for optimized supply chains.'
        },
        {
          title: 'Sustainability',
          description: 'Eco-friendly materials without compromising quality or aesthetics.'
        }
      ]
    },
    {
      id: 'jewellery-repair',
      title: 'Jewellery Repair',
      image: 'https://plus.unsplash.com/premium_photo-1661645433820-24c8604e4db5?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: `Qstone Designs provides expert repair services for all types of jewelry, restoring each piece with precision and care. From resizing to redesigning, we handle your treasured pieces with the utmost craftsmanship.`,
      highlights: [
        {
          title: 'Comprehensive Repair Services',
          description: 'Diamond jewelry repairs, gold soldering, and resizing services.'
        },
        {
          title: 'Corporate and Bulk Repairs',
          description: 'Dedicated services for businesses and bulk repair requirements.'
        },
        {
          title: 'Restoration and Redesign',
          description: 'Stone replacement, jewelry redesign, and re-plating to refresh heirloom pieces.'
        }
      ]
    }
  ];
  
  

const page = ({ params }) => {
  // Find the service matching the serviceID param
  const service = services.find((service) => service.id === params.serviceID);

  // Handle the case where no service matches the ID
  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <div className='flex flex-col items-center'>
          <NavBar/>
          <div className='flex flex-col items-center gap-3 py-10 px-10 md:px-0'>
              <h3 className={`${dmsans.className} text-[#d9d9d9] tracking-tight`}>Explore how we help with</h3>
              <div className='w-40 md:w-80 bg-gradient-to-r from-[#101010] via-[#AE7C53] to-[#101010] h-[2px]'></div>
              <h1 className={`${federo.className} text-4xl md:text-6xl tracking-tight bg-gradient-to-r from-[#FFFFFF] to-[#AE7C53] inline-block text-transparent bg-clip-text text-center`}>{service.title}</h1>
              <p className={`${dmsans.className} text-white md:text-md text-sm tracking-tight md:px-28 text-center`}>{service.description}</p>
          </div>
          <img src={service.image} alt="" className='h-80 object-cover w-screen py-10'/>
          <div className='py-10 grid grid-cols-1 md:grid-cols-3 text-center gap-10 px-10 md:px-28'>
            {service.highlights.map((highlight) => {
              return(
                <div className='flex flex-col gap-5'>
                  <h3 className={`${federo.className} text-xl md:text-2xl font-bold text-[#eeba81]`}>{highlight.title}</h3>
                  <p className={`${dmsans.className} md:text-md text-sm tracking-tighter`}>{highlight.description}</p>
                </div>
              )
            })}
          </div>
          <CustomFooter/>
      </div>
  );
};

export default page;
        import React from 'react'
        import { Federo, DM_Sans } from "next/font/google";
        import CustomFooter from '@/components/CustomFooter';
        import NavBar from '@/components/NavBar';

        const federo = Federo({
            weight: ["400"], // Specify weights
            subsets: ["latin"],    // Choose subsets
        });

        const dmsans = DM_Sans({
            weight: ["100", "200", "400", "500", "600", "700", ], // Specify weights
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

        const page = () => {
        return (
            <div className='flex flex-col items-center'>
                <NavBar/>
                <div className='flex flex-col items-center gap-3  px-10 md:px-0'>
                    <h3 className={`${dmsans.className} text-[#101010] tracking-tight`}>Because Your Style Deserves Uniqueness</h3>
                    <div className='w-40 md:w-80 bg-gradient-to-r from-[#ffffff] via-[#AE7C53] to-[#ffffff] h-[2px]'></div>
                    <h1 className={`${federo.className} text-5xl md:text-6xl tracking-tight bg-gradient-to-r from-[#101010] to-[#AE7C53] inline-block text-transparent bg-clip-text`}>Our Services</h1>
                    <p className={`${dmsans.className} text-black md:text-md tracking-tight md:px-28 text-center`}>Crafted with precision and passion, our jewelry is designed to reflect your individuality, offering timeless elegance that complements your unique style and grace.</p>
                </div>
                <div className="flex gap-10 flex-col py-10 px-5">
            {services.map((service, index) => {
                const isEven = index % 2 === 0; // Determine alignment
                return (
                  <div
                  key={service.title} // Unique key for each card
                  className={`relative flex flex-col py-16 tracking-tighter ${
                    isEven ? "items-start" : "items-end"
                  }`}
                >
                  {/* Background with image, blur, and color overlay */}
                  <div
                    className="absolute inset-0 z-0 overflow-hidden backdrop-blur-lg"
                    style={{
                      backgroundImage: `url("${service.image}")`,
                      backgroundSize: "cover",
                      backgroundPosition: "center", // Blur effect for the background
                    }}
                  >
                    {/* Color overlay */}
                    <div
                      className={`absolute inset-0 ${
                        isEven
                          ? "bg-gradient-to-l from-[#C08E58] to-[#101010]"
                          : "bg-gradient-to-r from-[#C08E58] to-[#101010]"
                      } opacity-70 backdrop-blur-xl`}
                    ></div>
                  </div>
                
                  {/* Foreground content */}
                  <div
                    className={`relative z-10 p-8 bg-transparent ${
                      isEven ? "md:w-1/2 text-left" : "md:w-1/2 ml-auto text-right"
                    } flex flex-col gap-5`}
                  >
                    <h2
                      className={`${dmsans.className} text-2xl md:text-3xl font-medium text-white`}
                    >
                      {service.title}
                    </h2>
                    <p className={`${dmsans.className} md:text-md text-sm text-white`}>
                      {service.description}
                    </p>
                    <a
                      className={`${dmsans.className} px-3 py-1 rounded-lg hover:bg-white hover:text-black text-white transition-colors`}
                      href={`/services/${service.id}`}
                    >
                      Explore Offerings →
                    </a>
                  </div>
                </div>
                
                );
            })}
        </div>

                <CustomFooter/>
            </div>
        )
        }

        export default page
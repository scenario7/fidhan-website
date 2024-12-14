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
              images: ['https://images.pexels.com/photos/4354613/pexels-photo-4354613.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'https://images.pexels.com/photos/7167017/pexels-photo-7167017.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'https://images.pexels.com/photos/6263143/pexels-photo-6263143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'],
              shortdesc : 'We specialize in the full-scale manufacturing of fine jewelry, delivering pieces that meet your brands highest standards. From prototype to production, we handle every detail with precision, using the finest materials and the latest technology. Whether youre producing small batch or large-scale orders, we ensure that your products are crafted with the utmost care and attention to detail.',
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
              shortdesc : 'Using state-of-the-art CAD (Computer-Aided Design) software and 3D rendering technologies, we bring your designs to life in precise digital formats. Our team generates photorealistic renderings and detailed CAD models that allow you to visualize your designs in the most accurate way before moving forward with production.',
              images: ['https://images.unsplash.com/photo-1501046791521-e24baf06e55b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',],
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
              shortdesc : 'We are proud to offer both natural diamonds and lab-grown diamonds, providing flexible options depending on your client’s preferences. All of our diamonds and gemstones come with GIA (Gemological Institute of America) and IGI (International Gemological Institute) certifications, ensuring that each stone meets the highest standards for quality, authenticity, and ethical sourcing.',
              images: ['https://images.pexels.com/photos/9544361/pexels-photo-9544361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'https://images.pexels.com/photos/13412779/pexels-photo-13412779.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'https://images.pexels.com/photos/13513581/pexels-photo-13513581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'https://images.pexels.com/photos/5442447/pexels-photo-5442447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'https://images.pexels.com/photos/19895204/pexels-photo-19895204/free-photo-of-close-up-of-a-diamond.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'],
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
              shortdesc : 'At Q Stone Designs, we offer customized packaging through our dedicated packaging brand, designed to enhance your jewelrys presentation. Our luxury packaging combines elegance, functionality, and durability, using high-quality materials like velvet linings and eco-friendly options. We work with you to create bespoke designs that reflect your brands style, ensuring your jewelry is beautifully protected and showcased.',
              images: ['https://images.pexels.com/photos/8087747/pexels-photo-8087747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'https://images.pexels.com/photos/20013416/pexels-photo-20013416/free-photo-of-engagement-ring-with-diamond-in-green-box.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'https://images.pexels.com/photos/20518707/pexels-photo-20518707/free-photo-of-silver-necklace-in-box.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'https://images.pexels.com/photos/12507511/pexels-photo-12507511.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'],
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
              shortdesc : 'At Qstone Designs, we understand the sentimental value your jewelry holds. When it comes to jewelry repairs, you need a trusted partner who delivers reliable and expert services. Whatever your repair needs may be, we are here to help restore your precious pieces to their original beauty.',
              images: ['https://images.pexels.com/photos/6263058/pexels-photo-6263058.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'],
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
                      backgroundImage: `url("${service.images[0]}")`,
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
                      {service.shortdesc}
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
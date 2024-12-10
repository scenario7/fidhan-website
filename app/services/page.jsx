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


        const services =[
            {
                title : "Jewellery Manufacturing",
                image : "https://images.unsplash.com/photo-1517348663636-31103cb49587?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                description : "We specialize in the full-scale manufacturing of fine jewelry, delivering pieces that meet your brand’s highest standards. From prototype to production, we handle every detail with precision, using the finest materials and the latest technology. Whether you're producing small batch or large-scale orders, we ensure that your products are crafted with the utmost care and attention to detail."
            },
            {
                title : "CAD and 3D Rendering",
                image : "https://images.unsplash.com/photo-1501046791521-e24baf06e55b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                description : "Using state-of-the-art CAD (Computer-Aided Design) software and 3D rendering technologies, we bring your designs to life in precise digital formats. Our team generates photorealistic renderings and detailed CAD models that allow you to visualize your designs in the most accurate way before moving forward with production."
            },
            {
                title : "Diamonds and Gemstones",
                image : "https://images.unsplash.com/photo-1547584322-003a00006db0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                description : "We are proud to offer both natural diamonds and lab-grown diamonds, providing flexible options depending on your client’s preferences. All of our diamonds and gemstones come with GIA (Gemological Institute of America) and IGI (International Gemological Institute) certifications, ensuring that each stone meets the highest standards for quality, authenticity, and ethical sourcing."
            },
            {
                title : "Jewellery Packaging Solutions",
                image : "https://images.unsplash.com/photo-1595246007497-15e0ed4b8d96?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                description : "At Ipsum we offer customized packaging through our dedicated packaging brand, designed to enhance your jewelry’s presentation. Our luxury packaging combines elegance, functionality, and durability, using high-quality materials like velvet linings and eco-friendly options. We work with you to create bespoke designs that reflect your brand’s style, ensuring your jewelry is beautifully protected and showcased."
            },
            {
                title : "Jewellery Repair",
                image : "https://plus.unsplash.com/premium_photo-1661645433820-24c8604e4db5?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                description : "Whether its resizing a beloved ring, repairing a broken clasp, replacing missing stones, or restoring heirloom jewellery, our skilled artisans use meticulous techniques and high-quality materials to provide seamless repairs. We handle each piece with care, precision, and the commitment to excellence that defines Ipsum."
            },
        ]

        const page = () => {
        return (
            <div className='flex flex-col items-center'>
                <NavBar/>
                <div className='flex flex-col items-center gap-3 py-10 px-10 md:px-0'>
                    <h3 className={`${dmsans.className} text-[#d9d9d9] tracking-tight`}>Because Your Style Deserves Uniqueness</h3>
                    <div className='w-40 md:w-80 bg-gradient-to-r from-[#101010] via-[#AE7C53] to-[#101010] h-[2px]'></div>
                    <h1 className={`${federo.className} text-5xl md:text-6xl tracking-tight bg-gradient-to-r from-[#FFFFFF] to-[#AE7C53] inline-block text-transparent bg-clip-text`}>Our Services</h1>
                    <p className={`${dmsans.className} text-white md:text-md text-sm tracking-tight md:px-28 text-center`}>Crafted with precision and passion, our jewelry is designed to reflect your individuality, offering timeless elegance that complements your unique style and grace.</p>
                </div>
                <div className="flex flex-col py-10">
            {services.map((service, index) => {
                const isEven = index % 2 === 0; // Determine alignment
                return (
                    <div
                        key={service.title} // Unique key for each card
                        className={`flex flex-col w-screen py-16 tracking-tighter ${
                            isEven ? "items-start" : "items-end"
                        }`}
                        style={{
                            backgroundImage: `linear-gradient(to right, #101010, rgba(16, 16, 16, 0.65)), url("${service.image}")`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    >
                        <div
                            className={`${
                                isEven ? "md:w-1/2 px-10 md:px-28 text-center md:text-left" : "md:w-1/2 px-10 md:px-28 text-center ml-auto md:text-right"
                            } flex flex-col gap-5`}
                        >
                            <h2 className={`${dmsans.className} text-2xl md:text-3xl font-medium`}>
                                {service.title}
                            </h2>
                            <p className={`${dmsans.className} md:text-md text-sm shadow-md`}>
                                {service.description}
                            </p>
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
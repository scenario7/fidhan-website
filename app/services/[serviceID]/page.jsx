import React from 'react';
import CustomFooter from '@/components/CustomFooter';
import { Federo, DM_Sans } from "next/font/google";
import NavBar from "@/components/NavBar";

const packagingPoints = [
  {
      title: "Luxury Box Packaging",
      description: "We specialize in creating custom luxury boxes for various products, including jewelry, cosmetics, and apparel. Made from premium materials, our boxes come in a range of finishes such as embossing and debossing, and we can personalize them with your brand logo and artwork."
  },
  {
      title: "Packaging Warehousing and Distribution",
      description: "We offer warehousing solutions for your packaging products in our facility. We can store and ship your packaging directly to your customers on demand, helping you save time, reduce costs, and optimize your supply chain."
  },
  {
      title: "Direct Packaging Solutions",
      description: "We work closely with you to develop tailored packaging solutions that meet your unique requirements. In addition, we can assist with inventory management to ensure you always have the packaging you need when you need it."
  },
  {
      title: "Why QStone Packaging",
      description: "At Qstone Designs, we are renowned for our meticulous attention to detail and dedication to craftsmanship. Our premium jewelry packaging boxes are thoughtfully designed and expertly constructed to meet the highest industry standards, ensuring the perfect presentation for your products."
  },
  {
      title: "Sustainability and Eco-Friendly Options",
      description: "We are committed to environmental responsibility. Our premium jewelry packaging boxes can be made from eco-friendly materials without compromising on quality or aesthetics, making them a sustainable choice for jewelers who prioritize both luxury and the planet."
  },
  {
      title: "Luxurious Aesthetics",
      description: "Our custom jewelry packaging boxes are more than just containers—they are an extension of your brand's luxury and sophistication. With a wide range of premium materials, finishes, and designs, Qstone Designs ensures that every box radiates opulence and elegance."
  },
  {
      title: "Customization for Distinctive Branding",
      description: "We understand that each brand is unique, which is why our custom jewelry packaging options allow you to imprint your brand's personality on every box. This creates a distinctive packaging solution that communicates your brand's identity directly to your target audience."
  }
];

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
      images: ['https://images.pexels.com/photos/4354613/pexels-photo-4354613.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'https://images.pexels.com/photos/7167017/pexels-photo-7167017.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'https://images.pexels.com/photos/6263143/pexels-photo-6263143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'],
      manufactureDesc : (<div className={`${dmsans.className} text-[#101010] flex flex-col gap-5 pt-10 tracking-tight px-10 md:px-28 text-center`}><p>Qstone Designs is a leading jewelry manufacturer with manufacturing facilities in both India and Dubai, specializing in the production of high-quality jewelry in gold, diamond, platinum, and silver. We offer an extensive range of jewelry from 10 to 24 karats, crafted with precision and attention to detail. Our expertise spans across diamond and gemstone setting, providing exquisite and durable designs that cater to the diverse needs of jewelry retailers, from small businesses to large enterprises.</p> <p> At Qstone Designs, we pride ourselves on offering customized solutions for each of our clients. Whether you require intricate mechanical components, unique materials, or specific finishes, our team is dedicated to tailoring the manufacturing process to your exact specifications. We create a wide variety of finishes, stone settings, and platings, ensuring every piece is crafted with precision and artistry.
 </p><p> Our commitment to innovation and quality, combined with competitive pricing, makes us a trusted partner for jewelry retailers worldwide. Whether you&apos;re looking for a classic design or a bespoke creation with a distinctive finish, Qstone Designs delivers superior craftsmanship that reflects your brand&apos;s vision.</p></div>),
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
        },
      ]
    },
    {
      id: 'cad-rendering',
      title: 'CAD and 3D Rendering',
      images: ['https://images.unsplash.com/photo-1501046791521-e24baf06e55b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',],
      description: `Qstone Designs utilizes advanced CAD and 3D rendering technology to bring your jewelry designs to life. Our detailed virtual models ensure that your designs are realized precisely as envisioned before physical production begins.`,
      highlights: [
        {
          title: 'Jewelry 3D Modelling',
          description: 'At Qstone Designs, we combine the artistry of traditional craftsmanship with the power of cutting-edge technology to offer exceptional Jewelry 3D Modeling services. Our advanced techniques allow us to create detailed virtual models of your jewelry designs, bringing your creative ideas to life before physical production begins. This seamless integration of innovation and precision ensures that your designs are realized exactly as envisioned, while staying true to our commitment to superior craftsmanship.'
        },
        {
          title: 'Jewelry CAM',
          description: 'After finalizing the CAD design, it is transferred to our 3D Rapid Prototype system, which utilizes Direct Light Projection Technology. This system meticulously builds the resin model using a fully functional 3D Rapid Prototyping System (RPT), ensuring the highest level of accuracy and detail.'
        },
        {
          title: 'Jewelry Rendering',
          description: 'Our 3D rendering service allows clients to view their jewelry designs from multiple angles. These high-quality images and videos provide a realistic and comprehensive visual representation, meeting your specific requirements and preferences. Rendered visuals are versatile, making them perfect for marketing materials such as websites, social media, or print ads. Stunning, lifelike renderings help attract potential customers and showcase your designs in the best possible light. Additionally, 3D rendering offers a cost-effective alternative to physical prototyping. Rather than creating a physical piece for each design, which can be expensive and time-consuming, 3D rendering allows you to visualize and refine your design digitally. This approach saves both time and costs, while ensuring that your final product is perfect before moving into production.'
        },
      ]
    },
    {
      id: 'diamonds-and-gemstones',
      title: 'Diamonds and Gemstones',
      diamondDescription : (
        <div className={`${dmsans.className} text-[#101010] flex flex-col gap-5 pt-10 tracking-tight px-10 md:px-28 text-center`}>
          <p>
          At Qstone Designs, we support retailers in sourcing the finest mined and lab-grown diamonds, along with other gemstones, from across the globe. We specialize in finding the finest diamonds for your jewelry, focusing on the Four Cs – Cut, Color, Clarity, and Carat. Our dedication is to provide you with top-quality gems from trusted suppliers, ensuring your complete satisfaction with every exceptional piece we craft.
          </p>
          <p>
          Trust Qstone Designs as your reliable source for diamonds and Gemstones that meet the highest standards, making your creations truly unforgettable.
          </p>
          <p>
          We also have an in-house lab-grown diamond manufacturing facility based in India, ensuring the highest standards of precision and quality for every piece.
          </p>
          <p>
          Our wide range of diamond shapes includes Round Brilliant, Cushion Modified, Princess, Emerald, Oval, Pear, Marquise, Heart, L. Radiant, Square Emerald, Taper Baguette, and Round Single Cut diamonds.
          </p>
          <p>
          We offer diamonds in sizes ranging from (-2 sieve sizes) to 10+ carats, covering both Brilliant Rounds and a diverse selection of fancy shapes.
          </p>
          <p>
          Our manufacturing process is focused on delivering exceptional quality, with diamonds ranging from flawless to I1-2 clarity, and colors from D to M.
          </p>
          <p>
          Each diamond is carefully cut to ideal parameters, ensuring perfect symmetry, excellent polishing, and outstanding brilliance.
          </p>
          <p>
          We specialize in both CVD and HPHT diamonds, providing premium gemstones for every requirement.
          </p>
          <p>
          We also offer gemstone cutting services, including the cutting of fancy-shaped gems, customized to meet the specific needs and preferences of our clients.
          </p>
        </div>
      ),
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
      packagingDesc : (
        <div className={`${dmsans.className} text-[#101010] flex flex-col gap-5 pt-10 tracking-tight px-10 md:px-28 text-center`}>
          <p>At QStone, we are dedicated to offering the best possible service and ensuring that your brand&apos;s packaging needs are met with precision and care. We are confident in our ability to provide the perfect packaging solution tailored to your products and brand.</p>
          <p>Here are a few ways QStone can assist you with your packaging needs:</p>
          <div>
            {packagingPoints.map((point) => {
              return(
                <div className='md:text-left py-5' key={point.title}>
                <h3 className={`${federo.className} text-2xl pb-2 text-[#eeba81]`}>{point.title}</h3>
                <p>{point.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      ),
      images: ['https://images.pexels.com/photos/8087747/pexels-photo-8087747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'https://images.pexels.com/photos/20013416/pexels-photo-20013416/free-photo-of-engagement-ring-with-diamond-in-green-box.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'https://images.pexels.com/photos/20518707/pexels-photo-20518707/free-photo-of-silver-necklace-in-box.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'https://images.pexels.com/photos/12507511/pexels-photo-12507511.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'],
      description: `Qstone Designs offers bespoke packaging solutions tailored to enhance your brand's image. From luxury boxes to eco-friendly packaging, we ensure your jewelry is beautifully presented and protected.`,
      highlights: []
    },
    {
      id: 'jewellery-repair',
      title: 'Jewellery Repair',
      repairDesc : (
        <div className={`${dmsans.className} text-[#101010] flex flex-col gap-5 pt-10 tracking-tight px-10 md:px-28 text-left`}>
          <p>At Qstone Designs, we understand the sentimental value your jewelry holds. When it comes to jewelry repairs, you need a trusted partner who delivers reliable and expert services. Whatever your repair needs may be, we are here to help restore your precious pieces to their original beauty.</p>
          <p>Our repair services include:</p>
          <ul className='list-disc list-inside'>
            <li>Diamond Jewellery Repairs</li>
            <li>Gold Jewellery Soldering</li>
            <li>Ring Resizing</li>
            <li>Corporate / Bulk Jewellery Repair Services</li>
            <li>Jewellery Cleaning</li>
            <li>Jewellery Engraving</li>
            <li>Jewellery Polishing</li>
            <li>Jewellery Re-Plating</li>
            <li>Jewellery Redesign</li>
            <li>Jewellery Restringing</li>
            <li>Jewellery Stone Setting</li>
            <li>Necklace, Bracelet, and Chain Link Repair</li>
            <li>Pearl Drilling</li>
            <li>Replacement of Gemstones</li>
        </ul>
        <p>
        Trust us with your jewelry repairs, and let us restore your pieces with the highest standards of craftsmanship.
        </p>
        </div>
      ),
      images: ['https://images.pexels.com/photos/6263058/pexels-photo-6263058.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',],
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
          <div className='flex flex-col items-center gap-3 py-10 px-3 md:px-0'>
              <h3 className={`${dmsans.className} text-[#101010] tracking-tight`}>Explore how we help with</h3>
              <div className='w-40 md:w-80 bg-gradient-to-r from-[#ffffff] via-[#AE7C53] to-[#ffffff] h-[2px]'></div>
              <h1 className={`${federo.className} text-4xl md:text-6xl tracking-tight bg-gradient-to-r from-[#101010] to-[#AE7C53] inline-block text-transparent bg-clip-text text-center`}>{service.title}</h1>
              {service.manufactureDesc}
              {service.diamondDescription}
              {service.repairDesc}
              {service.packagingDesc}
          </div>
          <div className="grid grid-cols-1 place-items-center md:grid-cols-4 px-10 gap-5 md:gap-10">
            {service.images.map((image, index) => {
              return (
                <div key={index} className="flex justify-center items-center">
                  <img src={image} alt="" className="h-80 object-cover w-80" />
                </div>
              );
            })}
          </div>
          <div className='py-10 grid grid-cols-1 md:grid-cols-3 text-center gap-10 px-10 md:px-28'>
            {service.highlights.map((highlight) => {
              return(
                <div className='flex flex-col gap-5' key={highlight}>
                  <h3 className={`${federo.className} text-xl md:text-2xl font-bold text-[#6c4a27]`}>{highlight.title}</h3>
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

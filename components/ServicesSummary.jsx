import React from 'react';
import { Federo, DM_Sans } from "next/font/google";
import ServiceCard from './ServiceCard';

const federo = Federo({
    weight: ["400"], // Specify weights
    subsets: ["latin"], // Choose subsets
});

const dmsans = DM_Sans({
    weight: ["400"], // Specify weights
    subsets: ["latin"], // Choose subsets
});

// Updated services array with objects
const services = [
    { title: "Jewellery Manufacturing", bgImageURL: "https://plus.unsplash.com/premium_photo-1673285097313-015a470ae6c9?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { title: "CAD & Rendering", bgImageURL: "https://images.unsplash.com/photo-1501046791521-e24baf06e55b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { title: "Packaging", bgImageURL: "https://images.unsplash.com/photo-1575485419394-c293c3f1ed32?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { title: "Jewellery Repair", bgImageURL: "https://images.unsplash.com/photo-1492714485642-dd6df6baafa2?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
];

const ServicesSummary = () => {
    return (
        <div className="flex flex-col gap-10 px-10 md:px-28">
            <div className="text-center">
                <h1 className={`${federo.className} text-white text-3xl`}>
                    Explore our Services and Offerings
                </h1>
            </div>
            <div className="flex flex-col gap-5">
                {services.map((service, index) => {
                    return (
                        <ServiceCard 
                            key={index} 
                            title={service.title} 
                            bgImageURL={service.bgImageURL} 
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default ServicesSummary;

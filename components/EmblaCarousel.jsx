"use client"
import React, { useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Federo, DM_Sans } from "next/font/google";

const federo = Federo({
  weight: ["400"], // Specify weights
  subsets: ["latin"], // Choose subsets
});

const dmsans = DM_Sans({
  weight: ["400"], // Specify weights
  subsets: ["latin"], // Choose subsets
});

export function EmblaCarousel({images}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  // Callback functions to control carousel
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()); // Logs the slides to verify
    }
  }, [emblaApi]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {images.map((image) => {
            return(
                <img src={image.asset?.url} alt="" className="h-80 object-cover w-80 embla__slide" key={image.asset?.url}/>
            )
          })}
        </div>
      </div>

      {/* Navigation buttons */}
      <div className={`embla__buttons flex justify-center gap-5 mt-5 ${dmsans.className}`}>
        <button
          className="embla__button bg-[#C08E58] text-white px-4 py-2 rounded-md hover:bg-[#AE7C53]"
          onClick={scrollPrev}
        >
          ← Prev
        </button>
        <button
          className="embla__button bg-[#C08E58] text-white px-4 py-2 rounded-md hover:bg-[#AE7C53]"
          onClick={scrollNext}
        >
          Next →
        </button>
      </div>
    </div>
  );
}

'use client';
import Image from 'next/image';
import React, { useEffect } from 'react'
import sikka from "../../../public/assets/hero/hero-heading.svg"
import heroimage from "../../../public/assets/hero/hero-image.svg";
import heroshadow from "../../../public/assets/hero/heroboxshadow.png";
import AOS from 'aos';

const HeroCard = () => {
  // AOS.init();

  useEffect(() => {
    AOS.init();
  }, []);

  /** data-aos="fade-right" aos-init aos-animate
   *  data-aos="fade-left"
   * aos-init aos-animate
   */

  return (
    <div className="max-w-6xl relative sm:top-5  sm:py-[2rem]  sm:px-[.8rem] md:py-[1rem] md:px-[1.2rem] lg:py-[1rem] lg:px-[2rem] m-auto flex justify-between gap-4">
      
      <div className="w-[60%]  m-auto border-yellow-500 fade-in-left ">
        <div
          className="
            w-[80%]
          md:py-[.7rem] 
          md:px-[.4rem] lg:py-[1rem] 
             lg:px-[.5rem]
         border-pink-500 "
        >
          <Image
            src={sikka}
            alt="Sikkafont"
            className="sm:w-[80%] md:w-[100%] lg:w-[100%] "
          />
        </div>

        <div
          className=" w-[80%]  sm:py-[.4rem]
          sm:px-[.1rem]
        md:py-[.3rem] md:px-[.4rem]  lg:py-[.6rem] lg:px-[.5rem]   border-pink-500"
        >
          <p className="text-white transition delay-150 duration-300 ease-in-out leading-[2rem] font-Lato text-[rgba(255, 255, 255, 0.8)] tracking-[0.1px] sm:text-base lg:text-1xl">
            Experience boundless amusement on ultimate betting platform! Unfold
            endless entertainment
          </p>
        </div>
        <div className=" md:px-[.3rem] lg:px-[.5rem]   text-left border-pink-500">
          <button className="text-white py-3 px-10 sm:text-sm text-lg rounded-[5px] join-button">
            Join Now!
          </button>
        </div>
      </div>

      <div className="w-[40%]  sm:pt-[1rem] md:pt-[1rem] lg:py-[1rem]  m-auto border-pink-500 fade-in-right ">
        <div className="heroshadow  relative top-[-60px] h-[1px] z-1">
          <Image src={heroshadow} alt="heroshadow" />
        </div>
        <div className="flex justify-center items-center ">
          <div className="lg:py-[.6rem] lg:px-[.3rem] border-green-600  m-auto rounded-t-lg z-10 ">
            <Image src={heroimage} alt="Image" className="m-auto " />
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default HeroCard
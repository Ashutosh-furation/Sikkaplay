"use client";
import React from "react";
import Navbar from "./Navbar";
import Mobilenav from "./Mobilenav";
import HeroCard from "./Herocard/HeroCard";
import Mobilehero from "./Herocard/Mobilehero";
import Image from "next/image";
import herobackground from "../../public/assets/hero/hero-background.svg";

const Hero: React.FC = () => {
  return (
    <section>
      <div
        className="bg-[url('/assets/hero/hero-background.svg')] 
      bg-center
       bg-no-repeat mobilesection  bg-[#0C0C0C]
        w-[100vw]    "
      >
        <div
          className="w-[100%] m-auto top-0
          fixed z-20  border-red-500 
          bg-[url('/assets/hero/Navboxshadow.svg')]
           py-[.7rem]  px-[1rem]  "
        >
          <Mobilenav />
        </div>
        <div className=" m-auto flex items-center justify-center">
          <div className="m-auto   relative top-[4rem]">
            <Mobilehero />
          </div>
        </div>
      </div>

      <div className="w-[100%] hidden sm:block  relative  ">
        <div className="z-0 w-full border-[.1px]  border-[#0C0C0C] bg-[#0C0C0C]  object-cover">
          <Image
            src={herobackground}
            alt="hero-background"
            className="z-10   "
          />
        </div>
        <div className="z-10  border-green-600 absolute inset-0 text-6xl text-white ">
          <div
            className=" w-[100%]
          fixed z-20 
          main-nav-con
           py-[1rem] opacity-6 rounded-lg"
          >
            <div>
              <Navbar />
            </div>
          </div>
          <div
            className=" m-auto relative 
          lg:py-[1.5rem] sm:py-[1rem]  
          top-[8rem] sm:top-[2rem] md:top-[5rem] 
           border-yellow-500"
          >
            <HeroCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

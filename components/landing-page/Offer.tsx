 import { offerDeatils } from "@/constants";
import React from "react";
import gamelogo from "../../public/assets/game/Gamelogo.svg"
import Image from "next/image";

const Offer = () => {
  return (
    <div className="bg-black text-white py-10">
      <div className="py-[2rem] flex items-center justify-center px-auto">
        <div className="m-10 border-yellow-600 headtop">
          <div className="flex items-center expl-text sm:text-base lg:text-3xl justify-center py-[1rem] border-yellow-500 ">
            <h1 className="text-center items-center"> Exclusive Offers </h1>
          </div>
        </div>
      </div>
    

      <div className="flex w-[95%] m-auto  justify-center items-center flex-wrap px-[2rem] py-3 sm:gap-7 lg:gap-4  ">
        {offerDeatils.map((offer) => {
          return (
            <div
              key={offer.id}
              className="basis-full  object-fill sm:basis-[45%] md:basis-[30%] "
            >
              <div className="w-[90%] mx-auto ">
                <img
                  src={offer.offerImage}
                  alt=""
                  className="w-full "
                  style={{
                    filter: "drop-shadow(0px 0px 20px rgba(255, 192, 0, 0.30))",
                  }}
                />
                <button className="font-lato font-semibold bg-gradient-to-t from-[#AD0B40] to-[#FF1917] py-3 px-2 w-full rounded-b-xl ">
                  Play Now
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Offer;

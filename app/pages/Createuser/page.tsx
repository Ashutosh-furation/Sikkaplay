import React from "react";
import Tablist from "../tablist/Tablist";
import sikklogo from "../../../public/assets/users/sikkuserlogo.svg";
import Acelocked from "../../../public/assets/users/Bottomborder.svg";

import Image from "next/image";

const page = () => {
  return (
    <div className="overflow-hidden max-w-8xl  px-2 py-2 pb-[2%] md:py-[12%] lg:py-[2%] bg-[#000000] bg-[url('/assets/users/userbackground.svg')]  border-green-700">
      <div className="w-[30%] py-4  lg:w-[12%] md:w-[25%]  flex items-center justify-center m-auto  border-green-600">
        <Image src={sikklogo} alt="sikka" />
      </div>

      <div className="w-[100%]   py-[20%] md:py-[10%] lg:py-[2%] lg:pb-[2%] bg-center  border-green-700  bg-no-repeat ">
        <div className="w-[100%]  px-4 mb-5 lg:py-[1%] sm:w-[60%] md:w-[50%] lg:w-[40%] bg-[#000000] m-auto  border-red-500">
          <Tablist />
        </div>
        <div className="w-[80%] m-auto  py-[5%] sm:py-[10] md:py-[8%] lg:py-7 px-2 flex items-center justify-center  border-yellow-500">
          <Image
            src={Acelocked}
            alt="Acelocked"
            className="text-white color-white"
          />
        </div>
      </div>
    </div>
  );
};

export default page;

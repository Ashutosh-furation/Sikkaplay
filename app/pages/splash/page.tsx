import Image from 'next/image';
import React from 'react'
import  sikkaace from "../../../public/assets/users/sikkuserlogo.svg"
import Acelocked from "../../../public/assets/users/Bottomborder.svg";

const page = () => {

    return (
      <div
        className=" bg-black
       bg-[url('/assets/users/userbackground.svg')]
        border-green-700  py-[20%] lg:py-[10%]"
      >
        <div className="w-[70%]  py-[12%] lg:py-1
         sm:w-[50%] 
         md:w-[60%] lg:w-[30%] 
         m-auto mb-10  border-green-600">
          <Image
            src={sikkaace}
            alt="sikkaace"
            className="w-[100%] sm:w-[70%] m-auto"
          />
        </div>

        <div className="w-[100%] relative bottom-0 py-[14%]
         sm:pt-[14%] md:pt-[16%]  
          lg:py-1 lg:pt-10
         sm:py-[10] md:py-[8%]  px-4 
         sm:w-[90%] m-auto    
         flex items-center justify-center 
          border-yellow-500">
          <Image
            src={Acelocked}
            alt="Acelocked"
            className="text-white color-white pt-40 lg:py-1"
          />
        </div>
      </div>
    );
}

export default page


/**
 * <div className="bg-[#000000] w-[100%] py-20   bg-center border-2 border-red-700  bg-no-repeat ">
          <div className="w-[30%]  py-5 m-auto mb-10 border-2 border-green-600">
            <Image src={sikkaace} 
            alt="sikkaace"
             className='w-[100%]'
            />
          </div>

          <div className="w-[90%] h-10  m-auto border-2 border-yellow-500"></div>
        </div>
 * 
 *  <div className="border-2 border-yellow-700">

        <div className="bg-[#000000]  border-2 bg-[url('/assets/users/userbackground.svg')] 
             h-screen
          w-[100%] py-20   bg-center  border-red-700  bg-no-repeat ">

          <div className="w-[50%] border-2  sm:w-[50%] md:w-[40%] py-5 m-auto mb-10  border-green-600">
            <Image
              src={sikkaace}
              alt="sikkaace"
              className="w-[100%] sm:w-[70%] m-auto"
            />
          </div>

          <div className="w-[100%] border-2  px-4 sm:w-[90%] m-auto  pt-[20%] sm:pt-[10%] md:pt-[14%]  py-[5%] sm:py-[10] md:py-[8%] lg:py-7  flex items-center justify-center  border-yellow-500">
            <Image
              src={Acelocked}
              alt="Acelocked"
              className="text-white color-white pt-20 sm:pt-20 md:pt-40"
            />
          </div>
        </div>
      </div>

 */
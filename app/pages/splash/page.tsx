import Image from 'next/image';
import React from 'react'
import spalshbackground from "../../../public/assets/users/SplashScreen.svg"
import  sikkaace from "../../../public/assets/users/sikkuserlogo.svg"

const page = () => {

    return (
      <div className="border-2  border-green-700">
        <div className="bg-[#000000] w-[100%] py-20   bg-center border-2 border-red-700  bg-no-repeat ">
          <div className="w-[30%]  py-5 m-auto mb-10 border-2 border-green-600">
            <Image src={sikkaace} 
            alt="sikkaace"
             className='w-[100%]'
            />
          </div>

          <div className="w-[90%] h-10  m-auto border-2 border-yellow-500"></div>
        </div>
      </div>
    );
}

export default page
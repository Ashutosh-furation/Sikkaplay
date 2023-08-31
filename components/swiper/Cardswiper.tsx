"use client";

import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import "swiper/swiper-bundle.min.css";
import "./styles.css";

import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import { Championsdata } from "../../constants/index";

const Cardswiper: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(1);

  const handleSlideChange = (swiper: any) => {
    setActiveIndex(swiper.activeIndex);
  };
  // console.log( "active",activeIndex)
 const pagination = {
   clickable: true,
   renderBullet: function (index:any, className:any) {
     return '<span class="' + className + '">'  + "</span>";
   },
 };
  return (
    <div
      className="border-2 w-[90%]  m-auto border-green-900
     relative top-[-20px] overflow-hidden "
    >
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        navigation={true}
        centeredSlides={true}
        initialSlide={1}
        onSlideChange={handleSlideChange}
        // pagination={{
        //   clickable: true,
        // }}
        pagination={pagination}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
          1440: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper overflow-hidden border-2 md:border-red-600"
      >
        {Championsdata.length > 0 &&
          Championsdata.map((data, index) => {
            return (
              <SwiperSlide
                key={data.id}
                // className={`swiper-dot congrs user-descrip userimage user-name Image ${
                //   activeIndex === index ? "selected" : ""
                // }`}
              >
                <div className="">
                  <div className="m-auto  congrs"></div>
                  <div className="flex  justify-center items-center ">
                    <div
                      //   className={`Image rounded-full userimage  `}
                      style={{
                        width: activeIndex === index ? "200px" : "100px",
                        opacity: activeIndex === index ? "3" : ".5",
                        border:
                          activeIndex === index ? "5px solid #B40E0D" : "",
                        marginTop: activeIndex === index ? "-10px" : "30px",
                      }}
                    >
                      <Image src={data.avatar} alt="avata" />
                    </div>
                  </div>

                  <div className=" border-green-600 mt-5">
                    <p
                      className="text-center  expl-text font-normal md:text-xl lg:text-2xl leading-8 tracking-normal text-gray-600"
                      //   style={{
                      //     color: activeIndex === index ? "#ffffff" : "#6E6E6E",
                      //   }}
                    >
                      {" "}
                      {data.username}
                    </p>
                  </div>
                  <div className="  border-green-600 mt-4 ">
                    <p
                      //   className={`${
                      //     index + 1
                      //   } text-center  font-lato text-lg font-normal leading-5 tracking-normal`}
                      //   style={{
                      //     color: activeIndex === index ? "#ffffff" : "#6E6E6E",
                      //   }}
                      className="text-white"
                    >
                      {data.userdes}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
};

export default Cardswiper;

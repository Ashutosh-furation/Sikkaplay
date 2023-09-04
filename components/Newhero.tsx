import React from 'react'
import Mobilenav from './landing-page/Mobilenav';
import Mobilehero from './landing-page/Herocard/Mobilehero';

const Newhero = () => {


  return (
    <section className="w-[100vw]  relative ">
      <div
        className="w-[100vw]   bg-[url('/assets/hero/background.svg')]
       bg-center bg-no-repeat"
      >
        <div
          className=" w-[100%]
          fixed z-20
          main-nav-con
           py-[1rem] opacity-2 rounded-lg"
        >
          <div>
            <Mobilenav />
          </div>
        </div>
        <Mobilehero />
      </div>
      <img
        src="/assets/hero/hero-background-bottom.svg"
        alt=""
        className="w-full h-full"
      />
    </section>
  );
}

export default Newhero
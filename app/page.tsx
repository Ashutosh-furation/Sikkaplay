import Explore from "@/components/landing-page/Explore";
import Faq from "@/components/landing-page/Faq";
import Footer from "@/components/landing-page/Footer";
import Game from "@/components/landing-page/Game";
import GameFeatures from "@/components/landing-page/GameFeatures";
import Hero from "@/components/landing-page/Hero";
import Offer from "@/components/landing-page/Offer";
import Champions from "@/components/landing-page/champions/Champions";
import Mobileh from "@/components/landing-page/mobilefullhero/mobileh";
import React from "react";

const page = () => {
  return (
    <div className="overflow-x-hidden max-w-8xl">
       <Hero/>
       {/* <Mobileh /> */}
      <Game />
      <Explore />
      <Offer />
      <Champions/>
      <Faq />
      <GameFeatures />
      <Footer />
    </div>
  );
};

export default page;

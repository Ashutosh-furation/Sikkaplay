import React from "react";

import champrectangle from "../../../public/assets/champs/champ-sidelogo.svg";
import Image from "next/image";
import ChampionCard from "./ChampionCard";
import sufflecoin from "../../../public/assets/champs/Sufflechamp.svg";
import gamelogo from "../../../public/assets/champs/Gamelogo.svg";
import Champmd from "./Champmd";

const Champions: React.FC = () => {
  return (
    <div
      className=" w-[100%]  py-[1rem] px-[1rem] m-auto border-green-600 bg-[rgb(7,7,7)]
     champ-con
    "
    >
      <div className="w-[100%] py-[1rem] px-[.5rem]  m-auto  flex justify-between ">
        <div className="w-[15%]  border-red-700">
          <Image src={champrectangle} alt="logo" className="mt-[-2px]" />
        </div>

        <div className="w-[15%] border-red-700">
          <Image src={sufflecoin} alt="logo" className="mt-[-2px]" />
        </div>
      </div>
      <div className="py-[.5rem] relative top-[-10px] flex items-center justify-center m-auto">
        <div className=" border-yellow-600 headtop">
          <div className="flex items-center expl-text text-3xl justify-center py-[1rem] border-yellow-500 ">
            <h1 className="text-center  text-white items-center"> Champions Talk </h1>
          </div>
        </div>
      </div>

      <div className="max-w-8xl  hidden md:block  py-[1rem] px-[1rem] m-auto border-yellow-500">
        <ChampionCard />
      </div>

      <div className="max-w-8xl py-[1rem] px-[.2rem] m-auto border-yellow-500  champmediumsize">
        <Champmd />
      </div>

    </div>
  );
};

export default Champions;

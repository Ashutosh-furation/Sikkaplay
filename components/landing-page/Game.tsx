import { GameCardDetails } from "@/constants";
import React from "react";
import GameCard from "./GameCard";
import gamelogo from "../../public/assets/game/Gamelogo.svg"
import Image from "next/image";
import pinkchip from "../../public/assets/game/pink-chip.svg"
import game from "../../public/assets/game/abs-1.svg";


const Game = () => {
  return (
    <div className="bg-[#0C0C0C]  relative w-[100vw]  py-12 px-3 text-white">

      <div className="py-[2rem] flex items-center justify-center px-auto">
        <div className="m-10 border-yellow-600 headtop">
          <div className="flex items-center expl-text text-3xl justify-center py-[1rem] border-yellow-500 ">
            <h1 className="text-center items-center"> Games </h1>
          </div>
        </div>
      </div>

      <Image
        src={pinkchip}
        alt="chip"
        className="w-14 sm:w-16 sm:h-16 lg:w-24 h-12 lg:h-24 top-8 right-[-0.5em] absolute"
      />

      <Image
        src={game}
        alt="game"
        className="w-14 sm:w-16 sm:h-16 lg:w-24 h-12 lg:h-24  top-8 left-1 absolute"
      />

      <div className="game-card-container  grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7   my-3 lg:my-12 sm:my-6  sm:justify-between sm:px-2  ">
        {GameCardDetails.map((card) => {
          return (
            <div
              key={card.id}
              className="basis-full p-6 sm:basis-[40%] md:basis-[48%] lg:basis-[30%]  "
            >
              <GameCard card={card} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Game;

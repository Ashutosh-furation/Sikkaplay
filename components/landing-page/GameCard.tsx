import React from "react";

const GameCard = ({ card }: any) => {
  return (
    <div className="flex   border-[#AD0B40] game-box-con  flex-col h-full">
      <img
        src={card.cardImage}
        alt={card.cardName}
        className="border-red-600 border-8 rounded-t-xl w-full"
      />
      <div className="bg-gradient-to-b from-[#4B494A] to-[#000000]   space-y-3 min-h-64 rounded-b-xl py-6 px-3 flex-1 sm:flex sm:flex-col sm:justify-around ">
        <h2 className=" md:text-2xl lg:text-4xl expl-text  text-left">{card.cardName}</h2>
        <p className="text-base text-[#4B494A] font-lato">
          {card.cardDesciption}
        </p>
        <button className="py-3 px-3 font-semibold bg-gradient-to-br from-[#AD0B40] to-[#FF1917] rounded-lg focus:outline-none w-full">
          Play Now
        </button>
      </div>
    </div>
  );
};

export default GameCard;

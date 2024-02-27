import React from "react";

function Buttons() {
  return (
    <div>
      <div className="flex pl-[11.25rem]">
        <p className="text-white text-xl pt-2 pr-2 ">
          Reward Collection Cost: 20
        </p>
        <img className="w-10" src="/images/Item_Fragile_Resin.webp" alt="" />
      </div>

      <div className="flex gap-6 pt-2">
        <button className="bg-white flex items-center py-2 rounded-full">
          <img className="pl-2" src="/images/buttons/matchButton.png" alt="" />
          <p className="text-gray-800 text-2xl px-16">Match</p>
        </button>

        <button className="bg-white flex items-center py-2 rounded-full">
          <img className="pl-2" src="/images/buttons/startButton.png" alt="" />
          <p className="text-gray-800 text-2xl px-16">Start</p>
        </button>
      </div>
    </div>
  );
}

export default Buttons;

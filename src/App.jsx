import "./index.css";
import React from "react";

function App() {
  return (
    <div className="relative h-screen w-screen">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/images/bgImage.jpg)" }}
      ></div>
      <div className="absolute inset-0 backdrop-blur-lg">
        <div className="w-full bg-black bg-opacity-50 h-20">
          <div className="mx-8">
            <img className="w-12 h-12" src="/svg/genshin2.svg" alt="" />
            <p className="text-xl text-[#d2bd8e]">Domain Entrance</p>
          </div>

          <div className="flex">
            <div className="flex items-center bg-gray-800 rounded-full">
              <img
                className="w-10 h-10"
                src="/images/Item_Fragile_Resin.webp"
                alt=""
              />
              <p className="text-white text-xl">134/160</p>
              <img
                className="w-8 h-8 bg-white p-2 rounded-full"
                src="/svg/genshinplus.svg"
                alt=""
              />
            </div>

            <button>
              <img
                className="bg-white w-12 h-12 rounded-full border-4 border-gray-500"
                src="/svg/genshinx.svg"
                alt=""
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

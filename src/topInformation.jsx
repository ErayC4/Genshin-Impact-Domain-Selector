import React from 'react'

function TopInformation() {
  return (
    <div>
        <div className="flex bg-black bg-opacity-55 h-20">
          {/*Top bar */}
          <div className="w-full flex items-center justify-between mx-12">
            {/*Domain rechts container*/}
            <div className="flex items-center gap-8">
              <img className="w-12 h-12" src="/svg/genshin2.svg" alt="" />
              <p className="text-xl text-[#d2bd8e]">Domain Entrance</p>
            </div>

            {/*links container mit resin und x button */}
            <div className="flex gap-8 h-8 items-center">
              {/*resin refill*/}
              <div className="flex items-center bg-gray-800 border-2 gap-2 border-gray-700 rounded-full">
                <img
                  className="w-10 h-10"
                  src="/images/Item_Fragile_Resin.webp"
                  alt=""
                />
                <p className="text-white text-xl">9/160</p>
                <button className="w-6 h-6 bg-white p-1.5 rounded-full mr-2">
                  <img src="/svg/genshinplus.svg" alt="" />
                </button>
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
  )
}

export default TopInformation
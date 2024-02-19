import React from "react";

function Domainselector() {
  const [isClicked, setIsClicked] = React.useState(false);

  function handleClick() {
    setIsClicked((prevClicked) => !prevClicked);
  }
  return (
    <div>
      <div className="flex ml-12 mt-12 mb-12">
        {/*links */}
        <div className="w-1/2 gap-y-4 grid">
          <div onClick={handleClick} className="cursor-pointer">
            {isClicked ? (
              <div className="w-full bg-amber-50 px-4 border-2 ring ring-white ring-opacity-100 border-gray-300 ">
                <p className="text-gray-700 text-2xl py-3">Domain Name I</p>
                <div className="flex items-center gap-2 pb-2">
                  <p className="bg-gray-600 px-2 text-white rounded-full">
                    Recommended Party Level: 47
                  </p>
                  <p className="bg-gray-600 px-2 text-fuchsia-500 rounded-full">
                    Ley Line Disorder
                  </p>
                </div>
              </div>
            ) : (
              <div className="w-full bg-gray-700 px-4 border-2 ring ring-gray-700 ring-opacity-100 border-gray-600">
                <p className="text-amber-50 text-2xl py-3">Domain Name I</p>
                <div className="flex items-center gap-2 pb-2">
                  <p className="bg-gray-800 px-2 text-white rounded-full">
                    Recommended Party Level: 47
                  </p>
                  <p className="bg-gray-800 px-2 text-fuchsia-500 rounded-full">
                    Ley Line Disorder
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
        

        {/*rechts */}
        <div></div>
      </div>
    </div>
  );
}

export default Domainselector;

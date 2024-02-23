import React from "react";

function DomainLevelSelector({ isClicked, domainObject, requirement, index }) {
  const convertToRoman = (num) => {
    const romanNumerals = ["I", "II", "III", "IV", "V", "VI"];

    if (num >= 0 && num <= 5) {
      return romanNumerals[num];
    } else {
      return "Ungültige Zahl";
    }
  };
  return (
    <div>
      {isClicked ? (
        // Inhalt für den Fall, dass isClicked true ist
        <div className="w-full scale-[1.04] transition-all duration-150 shadow-md shadow-white bg-amber-50 px-4 border-2 ring ring-white ring-opacity-100 border-gray-300">
          <p className="text-gray-700 text-2xl py-3">
            Domain Of {domainObject.type}: {domainObject.name}{" "}
            {convertToRoman(index)}
          </p>
          <div className="flex items-center gap-2 pb-2">
            <p className="bg-gray-600 px-2 text-white rounded-full">
              Recommended Party Level: {requirement.recommendedLevel}
            </p>
            <p className="bg-gray-600 px-2 text-fuchsia-500 rounded-full">
              Ley Line Disorder
            </p>
          </div>
        </div>
      ) : (
        // Inhalt für den Fall, dass isClicked false ist
        <div className="hover:bg-gray-800 hover:scale-[1.035] hover:border-2 hover:border-amber-50 hover:ring-transparent transition-all duration-150 w-full bg-gray-700 px-4 border-2 ring ring-gray-700 ring-opacity-100 border-gray-600">
          <p className="text-amber-50 text-2xl py-3">
            Domain Of {domainObject.type}: {domainObject.name}{" "}
            {convertToRoman(index)}
          </p>
          <div className="flex items-center gap-2 pb-2">
            <p className="bg-gray-800 px-2 text-white rounded-full">
              Recommended Party Level: {requirement.recommendedLevel}
            </p>
            <p className="bg-gray-800 px-2 text-fuchsia-500 rounded-full">
              Ley Line Disorder
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default DomainLevelSelector;

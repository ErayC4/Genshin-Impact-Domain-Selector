import React from "react";
import { useState, useEffect } from "react";
import RightSide from "./rightSide";

function DomainSelector() {
  // State variables
  const [isClicked, setIsClicked] = useState(null);
  const [domain, setDomain] = useState([]);

  // Constants
  const baseUrl = "https://genshin.jmp.blue";
  const domainName = "Cecilia Garden";

  const convertToRoman = (num) => {
    const romanNumerals = ["I", "II", "III", "IV", "V", "VI"];

    if (num >= 0 && num <= 5) {
      return romanNumerals[num];
    } else {
      return "Ungültige Zahl";
    }
  };

  // Fetch domains on component mount
  useEffect(() => {
    const fetchDomains = async () => {
      try {
        // Fetch all domains
        const response = await fetch(`${baseUrl}/domains/all`);
        const data = await response.json();

        // Filter domains based on the specified domainName
        const filteredDomains = data.filter(
          (domain) => domain.name === domainName
        );

        // Set the filtered domains in the state
        setDomain(filteredDomains);
      } catch (error) {
        console.error("Error fetching domains:", error);
      }
    };

    fetchDomains();
  }, []);

  function handleClick(index) {
    setIsClicked(index === isClicked ? null : index);
  }
  return (
    <div className="flex ml-12 mt-12 mb-12 gap-12">
      {/*links */}
      <div className="w-[45%]">
        {domain.map((domainObject) =>
          // Iteriere über jedes Anforderungsobjekt in der Domäne
          domainObject.requirements.map((requirement, index) => (
            // Iteriere über jedes Anforderungsniveau und wiederhole den Block entsprechend
            <div className="pb-4" key={index}>
              <div onClick={() => handleClick(index)}>
                
                {index === isClicked ? (
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
            </div>
          ))
        )}
      </div>
      <div className="w-[55%]">
      <RightSide clickedIndex={isClicked}/>

      </div>
    </div>
  );
}

export default DomainSelector;

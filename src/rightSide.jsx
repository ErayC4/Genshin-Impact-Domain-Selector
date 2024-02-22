import React, { useState, useEffect } from "react";
import Elements from "./Elements";

function RightSide({ clickedIndex }) {
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

  return (
    <div className="mr-12">
      <div className="ml-4">
        {domain.map((domainObject) => (
          <div>
            <div className="text-xl flex gap-4">
              <img
                className="object-cover object-center h-52 w-72 border-2 border-gray-400 "
                src="/images/Domain_Cecilia_Garden.webp"
                alt=""
              />
              <div>
                <p className="text-[#d2bd8e] mb-2">
                  {domainObject.name} {convertToRoman(clickedIndex)}
                </p>
                <p className="text-white">{domainObject.description}</p>
              </div>
            </div>

            <div className="w-full border-t border-b border-slate-400 mt-4">
              <div className="my-1">
                {clickedIndex >= 2 ? (
                  <div>
                    <div className="flex items-center justify-between">
                    <p className="text-xl text-[#d2bd8e]">Challange Features</p>
                    <Elements elementTypes={domainObject.recommendedElements} />
                    </div>
                    <p>{domainObject.leyLineDisorder}</p>
                  </div>
                ) : (
                  <div className="flex items-center justify-between">
                    <p className="text-white text-xl">Recommended Elements</p>
                    <Elements elementTypes={domainObject.recommendedElements} />
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RightSide;

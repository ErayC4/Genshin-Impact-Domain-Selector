import React from "react";
import { useState, useEffect } from "react";
import RightSide from "./rightSide";
import GenshinImpactArtifact from "./genshinArtifacts";
import DomainLevelSelector from "./domainLevelSelctor";

function DomainInformation() {
  const [isClicked, setIsClicked] = useState(null);
  const [everyDomainInformation, setEveryDomainInformation] = useState([]);

  // Constants
  const baseUrl = "https://genshin.jmp.blue";
  const domainName = "Valley of Remembrance";
  let domainMaxLvL;
  function something(domainLevels){
    domainMaxLvL = domainLevels 
  }

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
        setEveryDomainInformation(filteredDomains);
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
    <div className="">
      {everyDomainInformation.map((domainObject, domainIndex) => (
        <div className="flex ml-12 mt-12 mb-12 gap-16">
          <div className="w-[45%]" key={domainIndex}>
            {domainObject.requirements.map((requirement, requirementIndex) => (
              <div className="pb-4" key={requirementIndex}>

                <div onClick={() => handleClick(requirementIndex)}>
                  <DomainLevelSelector
                    isClicked={isClicked === requirementIndex}
                    domainObject={domainObject}
                    requirement={requirement}
                    index={requirementIndex}
                  />
                  {something(requirementIndex)}
                </div>
              </div>
            ))}
          </div>

          <div className="w-[55%]">
            <RightSide clickedIndex={isClicked} />
            <GenshinImpactArtifact
              domainRewardInformation={domainObject}
              clickedIndex={isClicked}
              domainMaxLvL={domainMaxLvL}
            />
            {console.log(domainMaxLvL)}
          </div>
        </div>
      ))}
    </div>
  );
}

export default DomainInformation;

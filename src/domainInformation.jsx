import React from "react";
import { useState, useEffect } from "react";
import RightSide from "./rightSide";
import GenshinImpactArtifact from "./genshinArtifacts";
import DomainSelector from "./domainselector";

function DomainInformation() {
  // State variables

  const [everyDomainInformation, setEveryDomainInformation] = useState([]);

  // Constants
  const baseUrl = "https://genshin.jmp.blue";
  const domainName = "Valley of Remembrance";



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



  return (
    <div className="flex ml-12 mt-12 mb-12 gap-12">
      {/*links */}
      <div className="w-[45%]">


         {everyDomainInformation.map((domainObject, index) => (
          // Iteriere über jedes Anforderungsobjekt in der Domäne
          <div key={index}>
            <DomainSelector domainSelectorInformation={domainObject}/>
            <GenshinImpactArtifact domainRewardInformation={domainObject} />
            
            
          </div>
        ))}
        
      </div>
      <div className="w-[55%]">
      </div>
    </div>
  );
}

export default DomainInformation;

import React, { useState, useEffect } from "react";

function RightSide() {
  const [isClicked, setIsClicked] = useState(null);
  const [domain, setDomain] = useState([]);

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
        setDomain(filteredDomains);
      } catch (error) {
        console.error("Error fetching domains:", error);
      }
    };

    fetchDomains();
  }, []);

  return (
    <div className="mt-12 mr-12">
      <div className="flex">
        <img className="object-cover object-center h-52 w-72 border-2 border-gray-400 " src="/images/Domain_Cecilia_Garden.webp" alt="" />
        {domain.map((domainObject, index)=>(
          <div>
            {domainObject.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default RightSide;

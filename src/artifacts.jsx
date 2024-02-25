import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function Artifacts({ artifactNames, artifactRarity }) {

  const [artifactset, setArtifactset] = useState(artifactNames);

  useEffect(() => {
    // Fetching artifacts
    const fetchArtifacts = async () => {
      try {
        const response = await fetch("https://genshin.jmp.blue/artifacts/all");
        const data = await response.json();

        // includes guckt ob names das artifact aus der artifact.name liste übereinstimmt, wenn ja gibt es true wenn ncith false züruck
        const filteredArtifacts = data.filter((artifact) =>
          artifactset.includes(artifact.name)
        );

        setArtifactset(filteredArtifacts);
      } catch (error) {
        console.error("Error fetching artifacts:", error);
      }
    };

    fetchArtifacts();
  }, []);

  console.log(artifactNames)

  return (
    <div>
      <div className="flex">
        <img className="w-24" src="/images/domainRewards/fourStarBg.png" alt="" />
        {artifactNames}
        {artifactRarity}
      </div>
    </div>
  );
}

export default Artifacts;

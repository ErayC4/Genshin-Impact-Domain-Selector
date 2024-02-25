import React from "react";

function Artifacts({ artifactNames, artifactRarity }) {
  // replaces " " with - and puts it lowercase
  const modifiedArtifactString = artifactNames
    .toLowerCase()
    .replace(/\s+/g, "-");
  return (
    <div>
      {
        <img
        className="w-24 rounded-lg absolute"
        src="/images/domainRewards/fourStarBg.png"
        alt=""
      />
      }
      
      <img
        className="relative w-24 rounded-b-lg"
        src={`https://genshin.jmp.blue/artifacts/${modifiedArtifactString}/flower-of-life`}
        alt=""
      />
    </div>
  );
}

export default Artifacts;

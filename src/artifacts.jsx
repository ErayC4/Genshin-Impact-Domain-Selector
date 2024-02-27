import React from "react";

function Artifacts({ artifactNames, artifactRarity, clickedIndex, domainMaxLvL }) {
  // replaces " " with - and puts it lowercase
  const modifiedArtifactString = artifactNames
    .toLowerCase()
    .replace(/\s+/g, "-");

  console.log(artifactRarity)
  

  function handleRarity(){
    if(artifactRarity === "3/4"){
       return ["three", "four"]
    }  
    else if(artifactRarity === "4/5"&& (domainMaxLvL - 2 < clickedIndex)){
      return ["four", "five"]
    }
    else{
      return ["four"]
    }
  }
  
    

  // artifacts.jsx
return (
  <div className="flex gap-4">
    {handleRarity().map((level) => (
      <div key={level}>
        <img
          className="w-24 h-24 rounded-lg absolute"
          src={`/images/domainRewards/${level}StarBg.png`}
          alt=""
        />
        <img
          className="relative w-24 h-24 rounded-b-lg"
          src={`https://genshin.jmp.blue/artifacts/${modifiedArtifactString}/flower-of-life`}
          alt=""
        />
      </div>
    ))}
  </div>
);

}

export default Artifacts;

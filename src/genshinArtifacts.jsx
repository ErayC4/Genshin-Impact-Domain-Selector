import React, { useState, useEffect } from "react";

const GenshinImpactArtifact = () => {
  const baseUrl = "https://genshin.jmp.blue";
  const [artifactset, setartifactset] = useState([]);
  const names = ["Adventurer", "Archaic Petra", "Blizzard Strayer"];
  const [imageIsOpen, setImageIsOpen] = React.useState(false);

  function handleClick() {
    setImageIsOpen((prevIsOpen) => !prevIsOpen);
  }

  useEffect(() => {
    // Fetching artifacts
    const fetchArtifacts = async () => {
      try {
        const response = await fetch(`${baseUrl}/artifacts/all`);
        const data = await response.json();

        // includes guckt ob names des artifact aus der artifact.name liste übereinstimmt, wenn ja gibt es true wenn ncith false züruck
        const filteredArtifacts = data.filter((artifact) =>
          names.includes(artifact.name)
        );

        setartifactset(filteredArtifacts);
      } catch (error) {
        console.error("Error fetching artifacts:", error);
      }
    };

    fetchArtifacts();
  }, []);

  return (
    <div>
      <ul>
        {artifactset.map((artifact) => (
          <div>
            <button onClick={handleClick}>
              <img
                className="w-24 rounded-xl cursor-pointer"
                src="/images/arti.jpg"
                alt=""
              />
            </button>

            <div>
              <li key={artifact.name}>
                <strong>{artifact.name}</strong>
                <p>Max Rarity: {artifact.max_rarity}</p>
                <p>2-piece bonus: {artifact["2-piece_bonus"]}</p>
                <p>4-piece bonus: {artifact["4-piece_bonus"]}</p>
              </li>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default GenshinImpactArtifact;

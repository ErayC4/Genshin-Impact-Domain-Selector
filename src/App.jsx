import "./index.css";
import React from "react";
import DomainSelector from "./domainselector";
import TopInformation from "./topInformation";
import GenshinImpactArtifact from "./genshinArtifacts";
function App() {
  return (
    <div className="relative h-screen w-screen">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/images/background.png)" }}
      ></div>
      <div className="absolute inset-0 backdrop-blur-lg">
        <TopInformation />
        {/*the middle*/}
        <DomainSelector />
        <GenshinImpactArtifact />
      </div>
    </div>
  );
}

export default App;

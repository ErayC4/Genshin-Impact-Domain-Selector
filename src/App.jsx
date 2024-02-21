import "./index.css";
import React from "react";
import DomainSelector from "./domainselector";
import TopInformation from "./topInformation";
import GenshinImpactArtifact from "./genshinArtifacts";
import RightSide from "./rightSide";

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
        <div className="flex gap-12">
          <div className="w-[45%]">
            <DomainSelector />
          </div>
          <RightSide />
        </div>
      </div>
    </div>
  );
}

export default App;

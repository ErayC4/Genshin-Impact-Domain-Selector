import "./index.css";
import React from "react";
import DomainInformation from "./domainInformation";
import TopInformation from "./topInformation";

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

        <DomainInformation />
      </div>
    </div>
  );
}

export default App;

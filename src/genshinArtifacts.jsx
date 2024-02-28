import React, { useRef, useState } from "react";
import Artifacts from "./artifacts";

function GenshinImpactArtifact({
  clickedIndex,
  domainRewardInformation,
  domainMaxLvL,
}) {
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [offset, setOffset] = useState(0);
  const [finalOffset, setFinalOffset] = useState(0);

  function handleMouseDown(e) {
    setIsDragging(true);
    setStartX(e.pageX);
  }

  function handleMouseMove(e) {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX;
    const newOffset = x - startX + finalOffset;
    setOffset(newOffset);
  }

  function handleMouseUp() {
    if (isDragging) {
      setIsDragging(false);
      setFinalOffset(offset);
    }
  }

  const styles = {
    transform: `translateX(${offset}px)`,
  };
  return (
    <div>
      <p className="text-white text-xl py-2">Possible Rewards: </p>
      {domainRewardInformation &&
        Array.isArray(domainRewardInformation.rewards) &&
        domainRewardInformation.rewards.map((reward, index) => (
          <div key={index}>
            <div>
              {reward.details.map((detail, detailIndex) => (
                <div key={detailIndex} className="overflow-hidden gap-4" ref={containerRef}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}>
                  {clickedIndex === detail.level - 1 && (
                    <div
                      style={styles}
                      className="flex gap-4"
                      
                    >
                      <div>
                        <img
                          className="w-24 rounded-lg absolute"
                          src="/images/domainRewards/mora.jpg"
                          alt=""
                        />
                        <p className="relative text-white text-center w-24 mt-16 rounded-b-lg bg-gray-700 bg-opacity-50">
                          {detail.mora}
                        </p>
                      </div>

                      <div>
                        <img
                          className="w-24 h-24 rounded-lg absolute"
                          src="/images/domainRewards/companionShipXP.jpg"
                          alt=""
                        />
                        <p className="relative text-white text-center w-24 mt-[4.25rem] rounded-b-lg bg-gray-700 bg-opacity-50">
                          {detail.companionshipExperience}
                        </p>
                      </div>
                      {detail.drops &&
                          Array.isArray(detail.drops) &&
                          detail.drops.map((drop, dropIndex) => (
                            <div key={dropIndex}>
                              <Artifacts
                                artifactNames={drop.name}
                                artifactRarity={drop.rarity}
                                clickedIndex={clickedIndex}
                                domainMaxLvL={domainMaxLvL}
                              />
                            </div>
                          ))}
                        
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
    </div>
  );
}

export default GenshinImpactArtifact;

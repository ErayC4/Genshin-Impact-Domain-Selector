import React, { useState, useEffect } from "react";
import Artifacts from "./artifacts";

function GenshinImpactArtifact({ clickedIndex, domainRewardInformation }) {
  return (
    <div>
      <p className="text-white text-xl py-2">Possible Rewards: </p>
      {domainRewardInformation.rewards.map((reward, index) => (
        <div key={index}>
          <div>
            {reward.details.map((detail, detailIndex) => (
              <div key={detailIndex}>
                {clickedIndex === detail.level - 1 && (
                  <div className="flex gap-4">
                    <div>
                      <img className="w-24 rounded-lg absolute" src="/images/domainRewards/mora.jpg" alt="" />
                      <p className="relative text-white text-center w-24 mt-16 rounded-b-lg bg-gray-700 bg-opacity-50">{detail.mora}</p>
                    </div>

                    <div>
                      <img className="w-24 h-24 rounded-lg absolute" src="/images/domainRewards/companionShipXP.jpg" alt="" />
                      <p className="relative text-white text-center w-24 mt-[4.25rem] rounded-b-lg bg-gray-700 bg-opacity-50">{detail.companionshipExperience}</p>
                    </div>
                    <div className="flex gap-4">
                      {
                        detail.drops.map((drop, dropIndex) => (
                          <div key={dropIndex}>
                            <Artifacts
                              artifactNames={drop.name}
                              artifactRarity={drop.rarity}
                            />
                          </div>
                        ))}
                    </div>
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

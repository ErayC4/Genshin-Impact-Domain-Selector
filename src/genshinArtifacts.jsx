import React, { useState, useEffect } from "react";

function GenshinImpactArtifact ({clickedIndex, domainRewardInformation}) {

  return (
    <div>
      {domainRewardInformation.rewards.map((reward, index) => (
              <div key={index}>
                  <div>
                    {reward.details.map((detail, detailIndex) => (
                      <div key={detailIndex}>
                        <p>Level: {detail.level}</p>
                        <div>
                          <img src="" alt="" />
                        {detail.companionshipExperience}

                        </div>
                        <p>Mora: {detail.mora}</p>
                        <div>
                          {detail.drops &&
                            detail.drops.map((drop, dropIndex) => (
                              <div key={dropIndex}>
                                <p>Name: {drop.name}</p>
                                <p>Rarity: {drop.rarity}</p>
                              </div>
                            ))}
                        </div>
                      </div>
                    ))}
                  </div>
              </div>
            ))}
    </div>
  );
};

export default GenshinImpactArtifact;

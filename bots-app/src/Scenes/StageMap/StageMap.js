import React, { useState, useEffect } from 'react';
import './StageMap.scss';
import useGenerateStageMap from '../../Hooks/GenerateStageMap';
import useUpdateFighterStats from '../../Hooks/UpdateFighterStats';
import StartStage from './Components/StartStage/StartStage';
import Doors from './Components/Doors/Doors';
import Fighter from '../../Components/Fighter/Fighter';

const StageMap = () => {
  const [levelCount, setLevelCount] = useState(0);
  const [stageCount, setStageCount] = useState(0);
  const [stageState, setStageState] = useState("start");
  const [stageMap, setStageMap] = useState(null);
  
  // Call useGenerateStageMap directly inside the StageMap component
  const generatedStageMap = useGenerateStageMap();
  const { updateFighterStats } = useUpdateFighterStats();

  useEffect(() => {
    if (stageState === "start") return;

    if (stageMap && levelCount > 0 && levelCount <= stageMap.length) {
      const currentLevelMap = stageMap[levelCount - 1];
    }
  }, [levelCount, stageMap, stageState]);

  const handleStartStage = () => {
    setStageMap(generatedStageMap); // Use the generated map
    setStageState("doors");
    setLevelCount(1);
    setStageCount(stageCount + 1);
  }

  const renderContent = () => {
    switch (stageState) {
      case "start":
        return <StartStage stageCount={stageCount} handleStartStage={handleStartStage} updateFighterName={updateFighterStats}/>;
      case "doors":
        if (stageMap && levelCount > 0 && levelCount <= stageMap.length) {
          const currentLevelMap = stageMap[levelCount - 1];
          return <Doors levelMap={currentLevelMap} levelCount={levelCount} setLevelCount={setLevelCount} />;
        } else {
          console.error("Invalid levelCount or stageMap.");
          // Handle error condition, maybe display an error message
          return null;
        }
      default:
        console.error("Invalid stageState.");
        // Handle error condition, maybe display an error message
        return null;
    }
  };

  return (
    <div className='stageMap'>
      <div className='stageMap-container'>
        {stageState != "start" && <Fighter />}
        {renderContent()}
      </div>
    </div>
  );
};

export default StageMap;

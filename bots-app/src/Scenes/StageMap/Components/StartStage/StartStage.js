import React, { useState, useContext } from 'react';
import { FighterStatsContext } from '../../../../App';

const StartStage = ({ stageCount, handleStartStage }) => {
  const [name, setName] = useState('');
  const { updateFighterStats } = useContext(FighterStatsContext);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleStageStartClick = () => {
    updateFighterStats('Name', name);
    handleStartStage();
  };

  return (
    <div>
        <h1>Bots</h1>
      <input
        type="text"
        value={name}
        onChange={handleNameChange}
        placeholder="Enter fighter name"
      />
      <button onClick={handleStageStartClick} disabled={!name.trim()}>Start Stage {stageCount + 1}</button>
    </div>
  );
};

export default StartStage;

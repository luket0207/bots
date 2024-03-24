import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDoorClosed } from '@fortawesome/free-solid-svg-icons';

const Doors = ({ levelMap, levelCount, setLevelCount }) => {
  const handleNextLevel = () => {
    setLevelCount(levelCount + 1);
  };

  return (
    <div className='doors'>
      <h2>Level {levelCount}</h2>
      {levelMap.map((doorType, index) => (
        <div key={index} className='doors-door'>
          <FontAwesomeIcon icon={faDoorClosed} />
          <span>{doorType}</span>
        </div>
      ))}
      <button onClick={handleNextLevel}>Next Level</button>
    </div>
  );
};

export default Doors;

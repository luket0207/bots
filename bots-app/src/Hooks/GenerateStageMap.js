import { useEffect, useState } from 'react';

const doorTypes = {
  BasicBattle: { min: 7, max: 12 },
  EliteBattle: { min: 3, max: 6 },
  TypeBattle: { min: 1, max: 3 },
  Treasure: { min: 5, max: 8 },
  Heal: { min: 2, max: 3 },
  Shop: { min: 3, max: 5 },
  BotMakingStation: { min: 3, max: 6 },
  MiniGames: { min: 10, max: 15 },
  Random: { min: 15, max: 20 },
};

const getRandomDoorType = () => {
  const types = Object.keys(doorTypes);
  return types[Math.floor(Math.random() * types.length)];
};

const useGenerateStageMap = () => {
  const [stageMap, setStageMap] = useState([]);

  useEffect(() => {
    const generateStageMap = () => {
      const levels = [];
      let totalDoors = 0;
      let totalLevels = 16;

      // Generate the amounts of door types
      const doorTypeCounts = {};
      Object.keys(doorTypes).forEach(type => {
        const { min, max } = doorTypes[type];
        doorTypeCounts[type] = Math.floor(Math.random() * (max - min + 1)) + min;
        totalDoors += doorTypeCounts[type];
      });

      // Share doors out over the 20 levels
      const doorsPerLevel = Math.ceil(totalDoors / totalLevels);

      // Ensure minimum 2 doors per level
      const minDoorsPerLevel = 2;

      // Assign doors into the levels
      let currentLevel = 0;
      while (currentLevel < totalLevels) {
        const level = [];
        let doorsAdded = 0;

        Object.keys(doorTypes).forEach(type => {
          const count = doorTypeCounts[type];
          for (let i = 0; i < count; i++) {
            if (doorsAdded >= doorsPerLevel) break;
            if (level.includes(type)) continue; // Skip if the type already exists in this level
            if (type === 'Random' || Math.random() < 0.2) {
              level.push(type);
              doorsAdded++;
              doorTypeCounts[type]--;
            }
          }
        });

        // Ensure minimum 2 doors per level
        while (level.length < minDoorsPerLevel) {
          const randomDoorType = getRandomDoorType();
          if (!level.includes(randomDoorType)) {
            level.push(randomDoorType);
            doorTypeCounts[randomDoorType]--;
            doorsAdded++;
          }
        }

        levels.push(level);
        currentLevel++;
      }

      // Shuffle the levels array
      for (let i = levels.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [levels[i], levels[j]] = [levels[j], levels[i]];
      }

      setStageMap(levels);
    };

    generateStageMap();
  }, []);

  return stageMap;
};

export default useGenerateStageMap;

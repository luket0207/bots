import { useContext } from 'react';
import { FighterStatsContext } from '../App'; // Assuming App.js is your top-level component

const useUpdateFighterStats = () => {
  const { updateFighterStats } = useContext(FighterStatsContext);
  return updateFighterStats;
};

export default useUpdateFighterStats;

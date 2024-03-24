import React from 'react';
import AppRouter from './AppRouter';
import './Assets/Scss/_import.scss';
import { FighterStats } from './Data/FighterStats';

export const FighterStatsContext = React.createContext();

const App = () => {
  const { fighterStats, updateFighterStats } = FighterStats();

  return (
    <FighterStatsContext.Provider value={{ fighterStats, updateFighterStats }}>
      <div className="App">
        <AppRouter />
      </div>
    </FighterStatsContext.Provider>
  );
};

export default App;

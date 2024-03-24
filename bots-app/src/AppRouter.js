import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StageMap from './Scenes/StageMap/StageMap';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StageMap />} />
      </Routes>
    </Router>
  );
}

export default App;

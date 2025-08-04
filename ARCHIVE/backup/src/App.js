import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Timeline from './pages/Timeline';

function App() {
  return (
    <Router>
      <div className="App min-h-screen bg-black text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/what-ive-done" element={<Timeline />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

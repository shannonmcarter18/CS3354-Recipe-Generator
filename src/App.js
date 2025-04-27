import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Slide1 from './Slide1';
import Slide2 from './Slide2';
import Slide3 from './Slide3';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Slide1 />} />
        <Route path="/saved" element={<Slide2 />} />
        <Route path="/landing" element={<Slide3 />} />
      </Routes>
    </Router>
  );
}

export default App;

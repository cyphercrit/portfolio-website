import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import GraphingDerivatives from './pages/GraphingDerivatives';
import UrlShortener from './pages/UrlShortener';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/graphing-derivatives" element={<GraphingDerivatives />} />
        <Route path="/projects/url-shortener" element={<UrlShortener />} />
      </Routes>
    </Router>
  );
}

export default App;
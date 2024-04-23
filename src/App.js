import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './components/Home/Home';
import Homesite from './components/Homesite/Homesite';
import Available from './components/Available/Available';
import PlanGallery from './components/PlanGallery/PlanGallery';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/available" element={<Available />} />
        <Route path="/plans" element={<PlanGallery />} />
        <Route path=":community_slug/:homesite_slug" element={<Homesite />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

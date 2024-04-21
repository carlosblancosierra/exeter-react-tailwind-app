import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './components/Home/Home';
import Homesite from './components/Homesite/Homesite';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":community_slug/:homesite_slug" element={<Homesite />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

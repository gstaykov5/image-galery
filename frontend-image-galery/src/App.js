import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

import Navbar from './component/layout/navbar/Navbar';
import Albums from './component/page/albums/Albums';
import Images from './component/page/images/Images';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Albums />} />
        <Route path='/album/:albumId/images' element={<Images />} />
      </Routes>
    </div>
  );
}

export default App;

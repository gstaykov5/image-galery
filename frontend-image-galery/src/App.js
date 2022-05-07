import React from 'react';
import './App.css';
import Navbar from './component/layout/navbar/Navbar';
import Albums from './component/page/albums/Albums';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Albums />
    </div>
  );
}

export default App;

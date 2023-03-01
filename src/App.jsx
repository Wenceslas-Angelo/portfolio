import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.scss';

import SideBar from './components/SideBar';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <SideBar />
      <div className="page-container">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

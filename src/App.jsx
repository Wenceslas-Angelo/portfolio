import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.scss';

import SideBar from './components/SideBar';
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';
import Error from './pages/Error';

function App() {
  return (
    <div className="App">
      <SideBar />
      <div className="page-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
{
  /* <div className="map-info">
        <iframe
          width="100%"
          height="100%"
          title="map"
          className="map"
          style={{ filter: 'opacity(0.7)' }}
          src="https://www.google.com/maps/embed/v1/place?q=Toamasina,+Madagascar&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
        />
      </div> */
}

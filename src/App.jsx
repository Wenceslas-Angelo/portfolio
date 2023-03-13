import React from 'react';
import { Route, Routes } from 'react-router-dom';

import SideBar from './components/SideBar';
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';
import Error from './pages/Error';

function App() {
  return (
    <div className="bg-[#181818]">
      <SideBar />
      <div className="min-h-[100vh] p-[20px] ml-0 md:ml-[80px] mb-[40px] md:mb-0">
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

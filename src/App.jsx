// src/App.jsx
import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import './App.scss';
import NavBar from './Components/NavBar.jsx';
import Homepage from './Pages/HomePage.jsx';
import AboutPage from './Pages/AboutPage.jsx';
import PortfoliosPage from './Pages/PortfoliosPage.jsx';
import ContactPage from './Pages/ContactPage.jsx';
import BirdBackground from './Components/BirdBackground.jsx';

function App() {
  const [navToggle, setNavToggle] = useState(false);
  const location = useLocation();

  const navClick = () => {
    setNavToggle(!navToggle);
  };

  return (
    <div className="App">
      <div className={`sidebar ${navToggle ? 'nav-toggle' : ''}`}>
        <NavBar />
      </div>

      <div className="nav-btn" onClick={navClick}>
        <div className="lines-1"></div>
        <div className="lines-2"></div>
        <div className="lines-3"></div>
      </div>

      <div className="main-content">
        <BirdBackground/>
        <div className="content">
          <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Homepage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/portfolios" element={<PortfoliosPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default App;

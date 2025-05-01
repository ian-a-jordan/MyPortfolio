import React from 'react';
import Me from '../img/Me.jpg';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div className="NavBar">
      <nav className="nav">
        <div className="profile">
          <img src={Me} alt="Profile" />
        </div>
        <ul className="nav-items">
          <li className="nav-item">
            <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/portfolios" className={({ isActive }) => (isActive ? 'active' : '')}>
              Portfolios
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>
              Contact
            </NavLink>
          </li>
        </ul>
        <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Ian Jordan</p>
        </footer>
      </nav>
    </div>
  );
}

export default Navbar;

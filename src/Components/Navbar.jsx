import React, { useState } from 'react';
import logo from '../assets/logo.svg';
import './Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="hamburger" onClick={toggleNavbar}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Navbar Links */}
        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li><a href="/home" onClick={toggleNavbar}>Home</a></li>
          <li><a href="/services" onClick={toggleNavbar}>Services</a></li>
          <li><a href="/aboutus" onClick={toggleNavbar}>About Us</a></li>
          <li><a href="/contact" onClick={toggleNavbar}>Contact</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

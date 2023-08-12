import React, { useState } from 'react';
import '../Style/NavBar.css';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="left">
        <p>José Kupeka Muhlanga</p>
      </div>

      <div className={`menu-icon ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}></div>

      <div className={`right ${menuOpen ? 'active' : ''}`}>
        <a href='#about-section'>About</a>
        <a href='#projects-section'>Projects</a>
        <a href='#contact-me'>Contact-Me</a>
      </div>
    </nav>
  );
}

export default NavBar;

import React, { useState } from 'react';
import './header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="container">
      <div className="max-width">
        <header className='display header'>
          <h1>Ibrohim.dev</h1>

          {/* Burger icon */}
          <div className="burger" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </div>




       


          {/* Menu */}
          <ul className={menuOpen ? "menu active" : "menu"}>
            <li>Home</li>
            <li>About Me</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Contact</li>
            {/* <button>Hire Me</button> */}
          </ul>
          <button className='header-btn'>Hire Me</button>
        </header>
      </div>
    </div>  
  );
};

export default Header;

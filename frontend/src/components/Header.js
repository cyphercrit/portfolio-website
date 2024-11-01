import React, { useEffect } from 'react';
import './Header.css';

function Header() {
  function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

  useEffect(() => {
    const icon = document.querySelector(".hamburger-icon");
    if (icon) {
      icon.addEventListener("click", toggleMenu);
    }

    // Clean up function to remove event listener
    return () => {
      if (icon) {
        icon.removeEventListener("click", toggleMenu);
      }
    };
  }, []);

  return (
    <>
      <nav id="desktop-nav">
        <div className="logo">Caden Jurkovski</div>
        <div>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            {/* <li><a href="#experience">Experience</a></li> */}
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>
      <nav id="hamburger-nav">
        <div className="logo">Caden Jurkovski</div>
        <div className="hamburger-menu">
          <div className="hamburger-icon">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="menu-links">
            <li><a href="#about">About</a></li>
            {/* <li><a href="#experience">Experience</a></li> */}
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
import React, { useState, useCallback } from 'react';
import styles from './Header.module.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  return (
    <>
      <nav className={styles.desktopNav}>
        <div className={styles.logo}>Caden Jurkovski</div>
        <ul className={styles.navLinks}>
          <li><a href="/#about">About</a></li>
          <li><a href="/#projects">Projects</a></li>
          <li><a href="/#contact">Contact</a></li>
        </ul>
      </nav>
      <nav className={styles.hamburgerNav}>
        <div className={styles.logo}>Caden Jurkovski</div>
        <div className={styles.hamburgerMenu}>
          <div 
            className={`${styles.hamburgerIcon} ${isMenuOpen ? styles.open : ''}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={`${styles.menuLinks} ${isMenuOpen ? styles.open : ''}`}>
            <li><a href="/#about">About</a></li>
            <li><a href="/#projects">Projects</a></li>
            <li><a href="/#contact">Contact</a></li>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
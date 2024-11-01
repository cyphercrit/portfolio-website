import React, { useEffect } from 'react';
import styles from './Header.module.css';

function Header() {
  function toggleMenu() {
    const menu = document.querySelector(`.${styles.menu_links}`);
    const icon = document.querySelector(`.${styles.hamburger_icon}`);
    menu.classList.toggle(styles.open);
    icon.classList.toggle(styles.open);
  }

  useEffect(() => {
    const icon = document.querySelector(`.${styles.hamburger_icon}`);
    if (icon) {
      icon.addEventListener("click", toggleMenu);
    }

    return () => {
      if (icon) {
        icon.removeEventListener("click", toggleMenu);
      }
    };
  }, []);

  return (
    <>
      <nav id="desktop-nav">
        <div className={styles.logo}>Caden Jurkovski</div>
        <ul className={styles.nav_links}>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <nav id="hamburger-nav">
        <div className={styles.logo}>Caden Jurkovski</div>
        <div className={styles.hamburger_menu}>
          <div className={styles.hamburger_icon}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={styles.menu_links}>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;

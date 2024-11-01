import React, { useEffect } from 'react';
import styles from './Header.module.css';

function Header() {
  function toggleMenu() {
    const menu = document.querySelector(`.${styles.menuLinks}`);
    const icon = document.querySelector(`.${styles.hamburgerIcon}`);
    menu.classList.toggle(styles.open);
    icon.classList.toggle(styles.open);
  }

  useEffect(() => {
    const icon = document.querySelector(`.${styles.hamburgerIcon}`);
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
          <div className={styles.hamburgerIcon}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={styles.menuLinks}>
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

import React from 'react';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <nav className={styles.nav}>
        <div className={styles.navLinksContainer}>
          <ul className={styles.navLinks}>
            <li><a href="/#about">About</a></li>
            {/* <li><a href="#experience">Experience</a></li> */}
            <li><a href="/#projects">Projects</a></li>
            <li><a href="/#contact">Contact</a></li>
          </ul>
        </div>
      </nav>
      <p className={styles.copyright}>
        Copyright © 2024 Caden Jurkovski. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;

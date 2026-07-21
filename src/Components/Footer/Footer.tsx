import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.brandSection}>
          <Link to="/" className={styles.brand}>VanderLoon Media</Link>
        </div>

        <nav className={styles.navigation} aria-label="Footer navigation">
          <Link to="/services">Services</Link>
          <Link to="/projects">Portfolio</Link>
          <Link to="/photography">Photography</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <div className={styles.meta}>
          <a className={styles.email} href="mailto:vanderloonmedia@gmail.com">
            vanderloonmedia@gmail.com
          </a>
          <span>© {year}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

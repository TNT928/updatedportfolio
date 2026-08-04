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

        <nav className={styles.socialLinks} aria-label="Social media">
          <a
            href="https://www.facebook.com/profile.php?id=61591748057048"
            target="_blank"
            rel="noreferrer"
            aria-label="VanderLoon Media on Facebook"
          >
            <svg className={styles.facebookIcon} viewBox="0 0 24 24" aria-hidden="true">
              <path d="M13.7 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5H17V3.9c-.7-.1-1.5-.2-2.2-.2-2.2 0-3.8 1.4-3.8 3.9V10H8.5v3H11v8h2.7Z" />
            </svg>
            <span>Facebook</span>
          </a>
          <a
            href="https://www.instagram.com/vanderloon_media/"
            target="_blank"
            rel="noreferrer"
            aria-label="VanderLoon Media on Instagram"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle className={styles.instagramDot} cx="17.5" cy="6.7" r="1" />
            </svg>
            <span>Instagram</span>
          </a>
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

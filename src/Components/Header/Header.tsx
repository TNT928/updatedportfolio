import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import styles from './Header.module.css';

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      {/* We use 'fixed="top"' to keep your navigation pinned elegantly at the top 
        while your premium background scrolls seamlessly underneath.
      */}
      <Navbar expand="lg" className={styles.header} expanded={expanded} fixed="top">
        <Container>
          <Navbar.Brand as={Link} to="/" className={styles.brandLink} onClick={() => setExpanded(false)}>
           <span style={{color:"#D1A551"}} >VanderLoon</span> <span style={{color:"#F2E1C9"}}>Media</span>
          </Navbar.Brand>
          
          {/* Added a custom class to style the mobile hamburger icon line color */}
          <Navbar.Toggle 
            aria-controls="basic-navbar-nav" 
            className={styles.customToggler}
            onClick={() => setExpanded(!expanded)} 
          />
          
          <Navbar.Collapse className="justify-content-end">
            <Nav className="ms-auto">
              
              <Nav.Link as={Link} to="/" className={styles.navLink} onClick={() => setExpanded(false)}>
                Home
              </Nav.Link>
              
              <Nav.Link as={Link} to="/projects" className={styles.navLink} onClick={() => setExpanded(false)}>
                Projects
              </Nav.Link>
              
              <Nav.Link as={Link} to="/photography" className={styles.navLink} onClick={() => setExpanded(false)}>
               Photography
              </Nav.Link>
              
              <Nav.Link as={Link} to="/about" className={styles.navLink} onClick={() => setExpanded(false)}>
                About
              </Nav.Link>
              
              <Nav.Link as={Link} to="/services" className={styles.navLink} onClick={() => setExpanded(false)}>
                Services
              </Nav.Link>

              <Nav.Link as={Link} to="/contact" className={styles.navLink} onClick={() => setExpanded(false)}>
                Contact
              </Nav.Link>
            </Nav>

            <div className={styles.socialLinks} aria-label="Social media">
              <a
                href="https://www.facebook.com/profile.php?id=61591748057048"
                target="_blank"
                rel="noreferrer"
                aria-label="VanderLoon Media on Facebook"
                onClick={() => setExpanded(false)}
              >
                <svg className={styles.facebookIcon} viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M13.7 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5H17V3.9c-.7-.1-1.5-.2-2.2-.2-2.2 0-3.8 1.4-3.8 3.9V10H8.5v3H11v8h2.7Z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/vanderloon_media/"
                target="_blank"
                rel="noreferrer"
                aria-label="VanderLoon Media on Instagram"
                onClick={() => setExpanded(false)}
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle className={styles.instagramDot} cx="17.5" cy="6.7" r="1" />
                </svg>
              </a>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;

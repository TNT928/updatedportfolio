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
              
              <Nav.Link as={Link} to="/about" className={styles.navLink} onClick={() => setExpanded(false)}>
                About
              </Nav.Link>
              
              <Nav.Link as={Link} to="/services" className={styles.navLink} onClick={() => setExpanded(false)}>
                Services
              </Nav.Link>
         
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
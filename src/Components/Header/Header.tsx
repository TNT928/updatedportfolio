import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";
import styles from './Header.module.css'


const Header = () => {
  return (
    <div>
         <Navbar expand="lg" className={styles.header} >
      <Container>
        <Navbar.Brand href="#" className={styles.link}><Link to="/" className={styles.link}>Michael VanderLoon</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse  className="justify-content-end">
            <Nav></Nav>
          <Nav className="ms-auto" >
            <Nav.Link href="#"><Link to="/" className={styles.link}>Home</Link></Nav.Link>
            <Nav.Link href="#"><Link to="/projects" className={styles.link}>Projects</Link></Nav.Link>
            <Nav.Link href="#"><Link to="/about" className={styles.link}>About</Link></Nav.Link>
         
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

   
    </div>
  )
}

export default Header
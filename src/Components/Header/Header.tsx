import React, {useState} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";
import styles from './Header.module.css'


const Header = () => {
  const [expanded, setExpanded] = useState(false)
  return (
    <div>
         <Navbar expand="lg" className={styles.header} expanded={expanded}>
      <Container>
        <Navbar.Brand href="#" className={styles.link}><Link to="/" className={styles.link}>Michael VanderLoon</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(true)} />
        <Navbar.Collapse  className="justify-content-end">
            <Nav></Nav>
          <Nav className="ms-auto" >
            <Nav.Link href="#"><Link to="/" className={styles.link} onClick={() => setExpanded(false)}>Home</Link></Nav.Link>
            <Nav.Link href="#"><Link to="projects" className={styles.link} onClick={() => setExpanded(false)}>Projects</Link></Nav.Link>
            <Nav.Link href="#"><Link to="about" className={styles.link} onClick={() => setExpanded(false)}>About</Link></Nav.Link>
         
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

   
    </div>
  )
}

export default Header
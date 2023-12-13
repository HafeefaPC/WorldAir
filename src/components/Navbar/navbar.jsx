import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../../assets/logo.png'
import './navbar.css'

const NavigationBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="black" variant="dark" >
      <Container>
        <Navbar.Brand href="#home" className="mr-auto"><img id='logo' src={logo} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link href="#service">Service</Nav.Link>
            <Nav.Link href="#gallery">Gallery</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;

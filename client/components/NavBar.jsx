import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Nav, Row, Col } from "react-bootstrap";

export default function NavBar() {
    return (
        <Navbar className='navbar' sticky="top"  expand="lg">
          <Col lg={6}>
          <Navbar.Brand href="#home">
            <img
              src="-peer-postie-icon.png"
              className="d-inline-block align-top logo-nav"
              alt="PeerPostie logo"
          />
          </Navbar.Brand>
          </Col>
          
          <Navbar.Brand  className='logo-title' href="#home">PeerPostie</Navbar.Brand>
          
          <Col className='nav-links' lg={6}>
        <Navbar.Toggle />
        <Navbar.Collapse id="basic-navbar-nav" >
            <Nav inline="true">
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#join">Join Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Col>
        </Navbar>
    )
  }
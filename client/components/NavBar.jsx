import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Nav, Col, Row } from "react-bootstrap";

export default function NavBar() {
    return (
      <div>
        <Navbar className='navbar' fixed="top" >
          
          <Col  md={2} lg={4}>
          <Navbar.Brand href="#home">
            <img
              src="-peer-postie-icon.png"
              className=" logo-nav"
              alt="PeerPostie logo"
          />
          </Navbar.Brand>
          
          </Col>
          <Col className='nav-title' lg={4}>
          <Navbar.Brand  className='logo-title' href="#home"><img
              src="logoText.png"
              alt="PeerPostie name"
          /></Navbar.Brand>
          </Col>
          
          <Col className='nav-links' lg={4}>
        <Navbar.Toggle />
        <Navbar.Collapse id="basic-navbar-nav" >
            <Nav inline="true">
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#join">Join Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Col>
        </Navbar>
        </div>
    )
  }
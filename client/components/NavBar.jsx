import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Nav } from "react-bootstrap";

export default function NavBar() {

    return (
        <Navbar sticky="top" bg="dark" variant="dark">
          <Navbar.Brand href="#home">
            <img
              src="peer-postie-icon.png"
              // width="30"
              // height="30"
              //className="d-inline-block align-top"
              alt="PeerPostie logo"
            ></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Nav inline="right" className="mr-auto">
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#join">Join Us</Nav.Link>
            </Nav>
        </Navbar>
    )
  }
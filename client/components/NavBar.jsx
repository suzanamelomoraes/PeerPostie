import React, { useState } from "react";
import Navbar from 'react-bootstrap/Navbar';

class NavBar extends React.Component {


  render() {
      return (
        <>
          <Container>
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">PostPeeps</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link noValidate href="#join">Join Us</Nav.Link>
              </Nav>
            </Navbar.Collapse>
            </Navbar>
          </Container>
        </>
      )
    }
}
export default  connect(Nav)
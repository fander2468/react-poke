import React, { Component } from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class NavBar extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark" style={{ marginBottom: "20px" }}>
        <Container>
          <Navbar.Brand as={Link} to="/">
            Poke
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    );
  }
}

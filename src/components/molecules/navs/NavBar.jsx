import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" style={{ marginTop: "2px" }}>
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          Todo-Shop
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={NavLink} to="/">
            Register
          </Nav.Link>
          <Nav.Link as={NavLink} to="/login">
            Login
          </Nav.Link>
          <Nav.Link as={NavLink} to="/todos">
            Todos
          </Nav.Link>
          <Nav.Link as={NavLink} to="/shop">
            Shop
          </Nav.Link>
          <Nav.Link as={NavLink} to="/cart">
            Cart
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;

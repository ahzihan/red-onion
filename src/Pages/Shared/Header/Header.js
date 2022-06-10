import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo2 from "../../../images/logo2.png";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
      <Container>
        <Navbar.Brand to="/">
          <img style={{ height: "25px" }} src={logo2} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link className="text-black fw-bold" to="/cart">
              Cart
            </Nav.Link>
            <Nav.Link className="text-black fw-bold" to="/login">
              Login
            </Nav.Link>
            <Nav.Link className="text-black fw-bold" to="/register">
              Register
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

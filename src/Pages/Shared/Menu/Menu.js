import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <Navbar collapseOnSelect variant="light">
      <Container>
        <Nav className="mx-auto">
          <Nav.Link as={Link} to="/breakfast">
            Breakfast
          </Nav.Link>
          <Nav.Link as={Link} to="/lunch">
            Lunch
          </Nav.Link>
          <Nav.Link as={Link} to="/dinner">
            Dinner
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Menu;

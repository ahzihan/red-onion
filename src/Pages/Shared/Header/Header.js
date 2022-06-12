import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo2 from "../../../images/logo2.png";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { signOut } from "firebase/auth";

const Header = () => {
  const [ user ] = useAuthState( auth );

  const logout = () => {
    signOut( auth );
  };
  return (
    <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img style={{ height: "25px" }} src={logo2} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link as={Link} className="text-black fw-bold" to="/cart">
              <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </Nav.Link>
            {
              user ? <Nav.Link onClick={logout} className='text-black fw-bold' as={Link} to="/login">Sign Out</Nav.Link> : <Nav.Link className='text-black fw-bold' as={Link} to="/login">Login</Nav.Link>
            }
            <Nav.Link as={Link} className="text-black fw-bold" to="/register">
              Register
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

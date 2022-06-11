import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo2 from "../../../images/logo2.png";
import Social from "../Social/Social";
import './SignIn.css';

const SignIn = () => {
  return (
    <div className="login py-5">
      <Form className="w-25 mx-auto">
        <div className="text-center fw-bold my-3">
          <img style={{ height: "45px" }} src={logo2} alt="logo" />
        </div>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control name="email" type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control name="password" type="password" placeholder="Password" />
        </Form.Group>

        <div className="d-grid gap-2">
          <Button variant="danger" type="submit">
            Login
          </Button>
        </div>
        <Form.Group className="my-2" controlId="formBasicCheckbox">
          <p>Please Sign Up?<Link to="/register"> Register</Link></p>
        </Form.Group>

        <div className="d-flex justify-content-center align-items-center">
          <div style={{ height: '1px' }} className="bg-dark w-50"></div>
          <p className="px-2 mt-2">Or</p>
          <div style={{ height: '1px' }} className="bg-dark w-50"></div>
        </div>
      </Form>
      <Social></Social>
    </div>
  );
};

export default SignIn;

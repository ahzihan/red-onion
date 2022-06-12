import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from "../../../firebase.init";
import logo2 from "../../../images/logo2.png";
import Social from "../Social/Social";

import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from "react-toastify";

const Register = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const [ createUserWithEmailAndPassword, user, loading, ] = useCreateUserWithEmailAndPassword( auth, { sendEmailVerification: true } );
  const [ updateProfile, updating ] = useUpdateProfile( auth );

  if ( user ) {
    navigate( from, { replace: true } );
  }
  if ( loading || updating ) {
    return <h3>Loading....</h3>;
  }
  const handleFormSubmit = async ( event ) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;

    if ( password !== confirmPassword ) {
      return;
    }
    await createUserWithEmailAndPassword( email, password );
    await updateProfile( { displayName: name } );
    toast( 'Updated profile' );
    navigate( from, { replace: true } );

  };
  return (
    <div className="login py-5">
      <Form onSubmit={handleFormSubmit} className="w-25 mx-auto">
        <div className="text-center fw-bold my-3">
          <img style={{ height: "45px" }} src={logo2} alt="logo" />
        </div>
        <Form.Group className="mb-3" controlId="formBasicname">
          <Form.Control name="name" type="text" placeholder="Enter Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control name="email" type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control name="password" type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control name="confirmPassword" type="password" placeholder="Confirm Password" />
        </Form.Group>

        <div className="d-grid gap-2">
          <Button variant="danger" type="submit">
            Register
          </Button>
        </div>
        <Form.Group className="my-2" controlId="formBasicCheckbox">
          <p>Already have an account?<Link to="/login"> Login</Link></p>
        </Form.Group>

        <div className="d-flex justify-content-center align-items-center">
          <div style={{ height: '1px' }} className="bg-dark w-50"></div>
          <p className="px-2 mt-2">Or</p>
          <div style={{ height: '1px' }} className="bg-dark w-50"></div>
        </div>
        <ToastContainer />
      </Form>
      <Social></Social>
    </div>
  );
};

export default Register;

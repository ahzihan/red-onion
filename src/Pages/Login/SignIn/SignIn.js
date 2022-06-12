import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from "../../../firebase.init";
import logo2 from "../../../images/logo2.png";
import Social from "../Social/Social";
import { ToastContainer, toast } from "react-toastify";
import './SignIn.css';

const SignIn = () => {
  const emailRef = useRef( '' );
  const navigate = useNavigate();
  const location = useLocation();
  const [ signInWithEmailAndPassword, user, loading ] = useSignInWithEmailAndPassword( auth );
  const [ sendPasswordResetEmail, sending ] = useSendPasswordResetEmail( auth );

  const from = location.state?.from?.pathname || "/";
  if ( user ) {
    navigate( from, { replace: true } );
  }
  if ( loading || sending ) {
    return <h3>Loading....</h3>;
  }
  const resetPassword = async () => {
    const email = emailRef.current.value;
    if ( email ) {
      await sendPasswordResetEmail( email );
      toast( 'Sent email' );
    } else {
      toast( 'Please Enter your email address.' );
    }

  };

  const handleSignIn = event => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    signInWithEmailAndPassword( email, password );

  };
  return (
    <div className="login py-5">
      <Form onSubmit={handleSignIn} className="w-25 mx-auto">
        <div className="text-center fw-bold my-3">
          <img style={{ height: "45px" }} src={logo2} alt="logo" />
        </div>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control ref={emailRef} name="email" type="email" placeholder="Enter email" />
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
        <p className='mb-0'>Reset Password? <button onClick={resetPassword} className='text-primary btn btn-link text-decoration-none'>Forget Password</button></p>
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

export default SignIn;

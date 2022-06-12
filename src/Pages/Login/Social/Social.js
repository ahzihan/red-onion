import React from "react";
import { Button } from "react-bootstrap";
import { signInWithPopup,GoogleAuthProvider} from "firebase/auth";
import auth from "../../../firebase.init";
import toast, { Toaster } from 'react-hot-toast';

const provider = new GoogleAuthProvider();

const Social = () => {
  const handleGoogle=()=>{
    signInWithPopup(auth, provider)
    .then(result=>{
      toast.success('User created successfully');
    })
    .catch(error=>{
      toast.error( 'Problem! Please try again' );
    })
  }
  
  return (
    <div className="w-25 mx-auto">
      <div className="d-grid gap-2 mb-2">
        <Button onClick={handleGoogle} variant="danger" type="submit">
          Google
        </Button>
        <Toaster
          position="top-right"
          reverseOrder={false}
        />
      </div>
      <div className="d-grid gap-2">
        <Button variant="primary" type="submit">
          Git Hub
        </Button>
      </div>
    </div>
  );
};

export default Social;

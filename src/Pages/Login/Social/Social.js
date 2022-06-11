import React from "react";
import { Button } from "react-bootstrap";

const Social = () => {
  return (
    <div className="w-25 mx-auto">
      <div className="d-grid gap-2 mb-2">
        <Button variant="danger" type="submit">
          Google
        </Button>
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

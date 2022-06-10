import React from "react";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
  return (
    <section className="banner w-100">
      <div className="banner-content">
        <h2 className="mb-3">Best Food Waiting For Your Belly</h2>
        <InputGroup className="mb-3 w-50">
          <FormControl className="" placeholder="search food items.." />
          <Button className="bg-danger text-white" variant="outline-none">
            Button
          </Button>
        </InputGroup>
      </div>
    </section>
  );
};

export default Banner;

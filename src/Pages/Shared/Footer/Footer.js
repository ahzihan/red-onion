import React from "react";
import "./Footer.css";
import logo from "../../../images/logo.png";

const Footer = () => {
  return (
    <footer>
      <section className="big-footer">
        <div className="container p-3 d-flex">
          <div className="col-6">
            <img style={{ height: "40px" }} src={logo} alt="logo" />
          </div>
          <div className="footer-content col-6 d-flex">
            <div className="col-6">
              <p>About Online Food</p>
              <p>Read Our Blog</p>
              <p>Sign up to delivery</p>
              <p>Add your resturent</p>
            </div>
            <div className="col-6">
              <p>About Online Food</p>
              <p>Read Our Blog</p>
              <p>Sign up to delivery</p>
              <p>Add your resturent</p>
            </div>
          </div>
        </div>
      </section>
      <section bg="dark">
        <div className="footer">
          <p className="text-center text-white p-2">
            Copyright By Md Akbar Hossain @ 2022
          </p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;

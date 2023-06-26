import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div>
          <img src="/img/Drop More Final Logo.svg" />
          <p>
            Introducing India’s First Reverse Drop Auction Shopping
            <br />
            Shop More Save More Thrill More
          </p>
          <div className="footer-click">
            <p>About Us</p>
            <p>Careers</p>
            <p>Press Release</p>
            <p>Blogs</p>
          </div>
        </div>
        <div>
          <h4>Contact US :</h4>
          <p>+91 9876543210</p>
          <p>abc@gmail.com</p>
          <h4>Follow us on:</h4>
          <div style={{ display: "flex", gap: "1rem" }}>
            <div className="logo-bg">
              <img src="/img/Vector (1).svg" />
            </div>
            <div className="logo-bg">
              <img src="/img/Group 6.svg" />
            </div>
            <div className="logo-bg">
              <img src="/img/Group 8.svg" />
            </div>
            <div className="logo-bg">
              <img src="/img/Group 20.svg" />
            </div>
          </div>
        </div>
        <div>
          <h4 style={{ textAlign: "center" }}>Subscribe to our newsletter</h4>{" "}
          <div className="input-submit">
            <input placeholder="Enter Your Email"></input>
            <button>Submit</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

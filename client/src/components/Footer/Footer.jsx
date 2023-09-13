import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left */}
        <div className="flexColStart f-left">
          <img src="./logo1.png" alt="" width={120} />
          <span className="secondaryText">
            Our goal is to provide each individual with their ideal living space.
            <br />
             We strive to make it the best place for them.
          </span>
        </div>
        <div className=" flexColStart f-right">
          <span className="primaryText">Information</span>{" "}
          <span className="secondaryText">456 Mumbai Lane, MH 1234, India.</span>
          <div className="flexCenter f-menu">
            <span>Property</span>
            <span>Services</span>
            <span>Product</span>
            <span>About Us</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;

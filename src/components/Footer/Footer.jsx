import React from "react";
import './Footer.css'

const Footer =() => {
  return (
    <section className="f-wrapper" id="footerSec">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
          <img src="./logo2.png" alt="" width={120} />
          <span className="secondaryText">
            We are here to make to shine brighter to the World.
          </span>
        </div>
        {/* right side */}
        <div className="flexColStart f-right">
          <span className="primaryText">Address</span>
          <span className="secondaryText">summa oru address</span>
          <div className="flexCenter f-menu">
          <a href="">Services</a>
          <a href="">Book Events</a>
          <a href="">Pricing</a>
          <a href="">About Us</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;

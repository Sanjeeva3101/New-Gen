import React from "react";
import "./Footer.css";
import { BsInstagram, BsMailbox2, BsWhatsapp } from "react-icons/bs";
import { MdCall } from "react-icons/md";

const Footer = () => {
  return (
    <section className="f-wrapper" id="footerSec">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
          <img src="./logo4.png" alt="" width={120} />
          <span className="secondaryText">
            We are here to make to shine brighter to the World.
          </span>
        </div>
        {/* right side */}
        <div className="flexColStart f-right">
          <span className="flexCenter h-menu">
            <a href="#serviceSec">Services</a>
            <a href="#valueSec">About Us</a>
            <a href="#contactSec">Contact Us</a>
          </span>
        </div>
      </div>
      <div className="flexCenter">
        <span className="primaryText">
          <a href="tel:+919342386606" className="icon-gap">
            <MdCall />
          </a>
          <a href="https://wa.me/+919342386606" className="icon-gap">
            <BsWhatsapp />
          </a>
          <a
            href="https://www.instagram.com/joo__official____"
            className="icon-gap"
          >
            <BsInstagram />
          </a>
          <a href="https://www.instagram.com/joo__official____">
            <BsMailbox2 />
          </a>
        </span>
      </div>
      <div className="flexCenter">
      <span className="secondaryText ">Copyright@ 2024 NeuGen. All right reserved</span>
      </div>
    </section>
  );
};

export default Footer;

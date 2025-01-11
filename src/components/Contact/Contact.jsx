import React from "react";
import "./Contact.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill, BsInstagram, BsMailbox, BsWhatsapp } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";

const Contact = () => {

  const openWhatsapp=()=>{
    window.location.href = `https://wa.me/+919342386606`;
  }

  const openTelephone=()=>{
    window.location.href = `tel:+919342386606`;
  }

  const openInstagram=()=>{
    window.location.href = `https://www.instagram.com/joo__official____`;
  }

  const openMail=()=>{
    window.location.href = "mailto:jeromjoshep.23@gmail.com"; 
  }

  return (
    <section className="c-wrapper" id="contactSec">
      <div className="paddings innerWidth flexCenter c-container">
        {/* left side */}
        <div className="flexColStart c-left">
          <span className="orangeText">Our Contacts</span>
          <span className="primaryText">Easy to Contact</span>
          <span className="secondaryText">Available on all platforms</span>
          <div className="flexColStart contactModes">
            {/* first row */}
            <div className="flexStart row">
                {/* first mode */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Call</span>
                    <span className="secondaryText">+91 9342386606</span>
                  </div>
                </div>
                <button className="flexCenter button-bgw" onClick={()=>{openTelephone()}}>Call Now</button>
              </div>
              {/* second mode */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsWhatsapp size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">WhatsApp</span>
                    <span className="secondaryText">+91 9342386606</span>
                  </div>
                </div>
                <button className="flexCenter button-bgw" onClick={()=>{openWhatsapp()}}>Chat Now</button>
              </div>
            </div>
            {/* second row */}
            <div className="flexStart row">
                {/* third mode */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsInstagram size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Instagram</span>
                    <span className="secondaryText">neu-gen</span>
                  </div>
                </div>
                <button className="flexCenter button-bgw" onClick={()=>{openInstagram()}}>View account</button>
              </div>
              {/* fourth mode */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsMailbox size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Mail</span>
                    <span className="secondaryText">jeromjoshep.23<br></br>@gmail.com</span>
                  </div>
                </div>
                <div className="flexCenter button-bgw" onClick={()=>{openMail()}}>Mail Now</div>
              </div>
            </div>
          </div>
        </div>
        {/* right side */}
        <div className="c-right">
          <div className="image-container">
            <img src="./contact.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

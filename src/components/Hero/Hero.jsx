import React from "react";
import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/* {Left section} */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle"></div>
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 2,
                type: "spring",
              }}
            >
              Convert the moments <br /> to memories with <br /> NEU-GEN.
            </motion.h1>
          </div>
          <div className="flexColStart hero-des">
            <span className="secondaryText">
              Make yourself popular than your competitors
            </span>
            <span className="secondaryText">
              You are the special one to have NEU-GEN by your side
            </span>
          </div>
          <div className="flexCenter search-bar">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type="text" />
            <button className="button-bgw">Search</button>
          </div>
          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp end={20} />
                <span>+</span>
              </span>
              <span className="secondaryText">Wedding Events</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp end={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Websites developed</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp end={8} />
                <span>+</span>
              </span>
              <span className="secondaryText">
                Digital-Marketting Customers
              </span>
            </div>
          </div>
        </div>

        {/* Right section */}

        <div className="flexCenter hero-right">
          <motion.div
            className="image-container"
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "spring",
            }}
          >
            <img src="./hero-image.png" alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

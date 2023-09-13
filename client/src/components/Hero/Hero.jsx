import React from "react";
import "./Hero.css";

import CountUp from "react-countup";

import { animate, motion, spring } from "framer-motion";
import SearchBar from "../SearchBar/SearchBar";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/* LEFT SIDE */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <motion.h1
              initial={{ y: "2rem", opacity: 1 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 2,
                type: "ease-in",
              }}
            >
              Locate <br /> Most Remarkable <br /> Property
            </motion.h1>
          </div>
          <div className="flexColStart hero-des">
            <span className="secondaryText">
              Easily find suitable properties without any hassle
            </span>
            <span className="secondaryText">
              Put aside all the difficulties in your quest for a new home.
            </span>
          </div>

          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={6800} end={8000} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Elite Products</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp start={1950} end={3000} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Happy Costomers</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp end={36} />
                <span>+</span>
              </span>
              <span className="secondaryText">Awards</span>
            </div>
          </div>
        </div>
        {/* RIGHT SIDE */}
        <div className=" flexCenter hero-right">
          <motion.div
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "ease-in",
            }}
            className="image-container"
          >
            <img src="./img1.webp" alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

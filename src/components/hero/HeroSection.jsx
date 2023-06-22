import React from "react";

import "./HeroSection.css";
import Button from "../ui/Button";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <>
      <section className="hero-container">
        <h1>HANDICRAFT AWAITS</h1>
        <p>What are you waiting for?</p>
        <div className="hero-btns">
          <Link to="/notice">
            <Button buttonStyle={"btn-outline"} buttonSize={"btn-large"}>
              GET STARTED
            </Button>
          </Link>
          <Link to="/notice">
            <Button buttonStyle={"btn-primary"} buttonSize={"btn-large"}>
              WATCH TRAILER <i className="far fa-play-circle"></i>
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}

export default HeroSection;

import React from "react";

import "./Footer.css";
import Button from "../ui/Button";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <section className="footer-cont">
        <div className="footer-subscription">
          <p id="subscription-call">
            Join the CRFT newsletter to receive our best deals!
          </p>
          <p id="subscription-text">You can unsubscibe at any time.</p>
          <div className="input-areas">
            <form>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                id="footer-input"
              />
              <Link to="/notice">
                <Button
                  buttonStyle={"btn-outline"}
                  buttonSize={"btn-medium"}
                  type={"button"}
                >
                  Subscribe
                </Button>
              </Link>
            </form>
          </div>
        </div>
        <div className="footer-links">
          <div className="footer-infos">
            <div className="info-category">
              <h2>About</h2>
              <Link to="/">CRFT</Link>
              <Link to="/notice">About Us</Link>
              <Link to="/notice">Blog</Link>
              <Link to="/notice">Jobs</Link>
              <Link to="/notice">Creatives</Link>
            </div>
            <div className="info-category">
              <h2>Info</h2>
              <Link to="/notice">Support</Link>
              <Link to="/notice">Contact</Link>
              <Link to="/notice">Terms of Use</Link>
              <Link to="/notice">Privacy policy</Link>
              <Link to="/notice">Cookies policy</Link>
            </div>
          </div>
          <div className="footer-rights">
            <p id="website-rights">CRFT ©2023</p>
          </div>
          <div className="footer-socials">
            <div className="social-icons">
              <Link
                to="/notice"
                className="social-icon-link"
                target="_blank"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f" />
              </Link>
              <Link
                to="/notice"
                className="social-icon-link "
                target="_blank"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram" />
              </Link>
              <Link
                className="social-icon-link "
                to="/notice"
                target="_blank"
                aria-label="Youtube"
              >
                <i className="fab fa-youtube" />
              </Link>
              <Link
                className="social-icon-link"
                to="/notice"
                target="_blank"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;

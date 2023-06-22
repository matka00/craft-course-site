import React, { useEffect, useState } from "react";

import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <div className="nav-cont">
        <nav id="navbar">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            CRFT
            <img
              src={process.env.PUBLIC_URL + "/images/logo.png"}
              alt="logo"
              id="nav-logo"
            />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/projects"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Projects
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/blog"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Blog
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/sign-up"
                className="nav-links mobile"
                onClick={closeMobileMenu}
              >
                Sign Up
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;

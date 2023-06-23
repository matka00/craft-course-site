import React from "react";
import { Link } from "react-scroll";

function ScrollUp() {
  return (
    <>
      <Link to="head" spy={true} smooth={true} offset={-112} duration={800}>
        <i className="fa-solid fa-chevron-up"></i>
      </Link>
    </>
  );
}

export default ScrollUp;

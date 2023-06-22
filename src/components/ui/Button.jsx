import React from "react";

import "./Button.css";

function Button({ children, buttonStyle, buttonSize, onClick, type }) {
  return (
    <button
      className={`btn ${buttonStyle} ${buttonSize}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
}

export default Button;

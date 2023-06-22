import React from "react";
import { Link } from "react-router-dom";

import "./CardItem.css";

function CardItem(props) {
  return (
    <>
      <div className="card-item">
        <Link to={props.path} className="card-item-link">
          <div className="card-item-pic">
            <img src={props.imgSrc} alt={props.title} />
            <p className="card-pic-label">{props.label}</p>
          </div>
          <h2 className="card-item-text">{props.text}</h2>
        </Link>
      </div>
    </>
  );
}

export default CardItem;

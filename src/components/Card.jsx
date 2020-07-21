import React from "react";

const Card = props => {
  return (
    <div className="card">
      <div
        className="flag"
        style={{ backgroundImage: "url(" + props.flag + ")" }}
      >
        {/* <img src={props.flag} alt="country flag" /> */}
      </div>
      <div className="info">
        <label className="title">{props.name}</label>
        <div className="h-3x"></div>
        <span className="tag">Population:</span>
        <span className="value"> {props.population}</span>
        <div className="h-x2"></div>
        <span className="tag">Region:</span>
        <span className="value"> {props.region}</span>
        <div className="h-x2"></div>
        <span className="tag">Capital:</span>
        <span className="value"> {props.capital}</span>
      </div>
    </div>
  );
};

export default Card;

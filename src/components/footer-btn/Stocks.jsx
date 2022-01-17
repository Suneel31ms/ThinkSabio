import React from "react";
import "./style.css";
const Stocks = ({ image, title, stockbtn }) => {
  return (
    <div>
      <div className=" bg-green dib br3 pa1  mv1 mh2 grow cli tc bw2 shadow-5">
        <img src={image} alt="background" />
        <h1>{title}</h1>
        <button className="stockbtn">{stockbtn}</button>
      </div>
    </div>
  );
};

export default Stocks;

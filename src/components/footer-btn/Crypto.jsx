import React, { useState } from "react";
import Api from "./Api";
import { useHistory } from "react-router-dom";
import "./style.css";
const Crypto = () => {
  const [cryptos] = useState(Api);
  const history = useHistory();
  const myHome = () => {
    history.push("/");
  };
  return (
    <div className='pt4 bg-purple h-100'>
                         <div className='top-sec'>
                         <h1>CRYPTO STOCKS</h1>
                         <button onClick={myHome} className='nav-btn ph4 pv3'>Back</button>
                     </div>
      <div className=" bottom-sec">
        {cryptos.map((crypto) => {
          return (
            <div className=" bg-green dib br3 pa1  mv1 mh2 grow cli tc bw2 shadow-5">
              <img src={crypto.image} alt="background" />
              <h1>{crypto.title}</h1>
              <button className="stockbtn">{crypto.Btn}</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Crypto;

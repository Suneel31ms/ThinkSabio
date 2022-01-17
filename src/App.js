import React from "react";
import Home from "./components/Home";

import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Donate from "./components/Donate";
import StockList from "./components/footer-btn/StockList";
import Option from "./components/footer-btn/Option";
import Crypto from "./components/footer-btn/Crypto";


function App() {
  return (
    <>
      <BrowserRouter>
        <nav className="nav-bar">
          <Link to="/">
            <img src="images/tslogo-dark.png" alt="logo" className="logo" />
          </Link>
          <Link to="/donate" className="nav-btn">
            Donate
          </Link>
          <i className="fas fa-bars"></i>
        </nav>
        <Switch>
          <Route exact path={"/"} component={Home} />
          <Route exact path={"/donate"} component={Donate} />
          <Route exact path={"/stock"} component={StockList} />
          <Route exact path={"/option"} component={Option} />
          <Route exact path={"/crypto"} component={Crypto} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;

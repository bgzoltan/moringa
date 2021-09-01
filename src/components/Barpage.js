import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Mainpage from "./Mainpage";

function Barpage() {
  return (
    <div>
      Main component
      <Router>
        <nav className="nav ">
          <Link to="/" id="logo">
            {/* <img
                  src="/img/colosseum-logo-white.png"
                  alt="colosseum"
                  height="200px"
                  style={{ marginTop: "100px" }}
                /> */}
          </Link>

          <div className="navBar  ">
            <ul className="navLine">
              <li>
                <Link className="menuLinks" to="/menu1">
                  Menu1
                </Link>
              </li>
              <li>
                <Link className="menuLinks" to="/menu2">
                  Menu2
                </Link>
              </li>
              <li>
                <Link className="menuLinks" to="/menu3">
                  Menu3
                </Link>
              </li>
              <li>
                <Link className="menuLinks" to="/menu4">
                  Menu4
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <Switch>
          <Route path="/" exact component={Mainpage} />
          <Route path="/menu1" />
          <Route path="/menu2" />
          <Route path="/menu3" />
          <Route path="/menu4" />
        </Switch>
      </Router>
    </div>
  );
}

export default Barpage;

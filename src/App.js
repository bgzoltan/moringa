import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React, { useState } from "react";
import Landing from "./components/Landing";
import Benefits from "./components/Benefits";
import Ingredients from "./components/Ingredients";
import Logo from "./img/moringa-logo.jpg";

function App() {
  return (
    <div className="App">
      <Router>
        <nav id="navigation">
          <div id="logo">
            <Link to="/">
              <img src={Logo} alt="moringa logo" />
            </Link>
          </div>

          <div id="navBar">
            <Link className="menuLinks" to="/benefits">
              Előnyök
            </Link>

            <Link className="menuLinks" to="/ingredients">
              Tápanyagok
            </Link>

            <Link className="menuLinks" to="/menu3">
              Vásárlás
            </Link>

            <Link className="menuLinks" to="/menu4">
              Egyéb
            </Link>
          </div>
        </nav>

        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/benefits" component={Benefits} />
          <Route path="/ingredients" component={Ingredients} />
          <Route path="/menu3" />
          <Route path="/menu4" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

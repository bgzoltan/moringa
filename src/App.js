import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Landing from "./components/Landing";
import Benefits from "./components/Benefits";
import Ingredients from "./components/Ingredients";
import Shop from "./components/Shop";
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
            <Link className="menuLinks leftLink" to="/">
              MORINGA
            </Link>

            <Link className="menuLinks" to="/benefits">
              MIÉRT JÓ
            </Link>
            <div className="center" />

            <Link className="menuLinks" to="/ingredients">
              TÁPANYAGOK
            </Link>

            <Link className="menuLinks rightLink" to="/shop">
              TERMÉKEK
            </Link>
            <Link className="centerLink" to="/" />
          </div>
        </nav>

        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/benefits" component={Benefits} />
          <Route path="/ingredients" component={Ingredients} />
          <Route path="/shop" component={Shop} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

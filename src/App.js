import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Landing from "./components/Landing";
import Benefits from "./components/Benefits";
import Ingredients from "./components/Ingredients";
import Shop from "./components/Shop";

function App() {
  return (
    <div className="App">
      <header>
        <h1 className="seoHeader"> A csodálatos Moringa Oleifera</h1>
      </header>
      <Router>
        <nav id="navigation">
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

import React from 'react';
import './App.css';
import Wrapper from "./components/wrapper"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/navbar"
import About from "./pages/about"
import Portfolio from "./pages/portfolio"
import Contact from "./pages/contact"
import NotFoundPage from "./pages/notFoundPage"
import footer from "./components/footer";

function App() {

  return (
    <Router>
      <Nav />
      <Wrapper>
        <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Portfolio" component={Portfolio} />
          <Route exact path="/Contact" component={Contact} />
          <Route component={NotFoundPage} />        </Switch>
      </Wrapper>
      <footer>
        <span>{"\u00A9"} Diane Magana {new Date().getFullYear()}</span>
      </footer>
    </Router>
  );
}

export default App;

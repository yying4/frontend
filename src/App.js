import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Nav from "./components/Nav";
import Header from "./components/Header";
import Search from "./components/Search";

import Home from "./pages/Home";
import Results from "./pages/Results";

import "./styles.css";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Nav />  {/* the content */}{" "}
        {/* A <Switch> looks through its children <Route>s and renders the first one that matches the current URL. */}{" "}
        <Switch>
          <Route exact path="/login">
            <Header />
            <Home />
          </Route>
          <Route path="/output">
            <Search />
            <Results />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

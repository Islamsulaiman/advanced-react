import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import Home from "./Home";
import About from "./About";
import People from "./People";
import Error from "./Error";
import Person from "./Person";
// navbar
import Navbar from "./Navbar";

const ReactRouterSetup = () => {
  const [login, setLogin] = useState(false);
  return (
    <Router basename='/Home'>
      <Navbar />
      <button
        onClick={() => {
          setLogin(!login);
        }}
      >
        {login ? "Log out" : "Log in"}
      </button>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/people'>{login ? <People /> : <Redirect to='/' />}</Route>
        <Route path='/person/:kofta' component={Person} />

        <Route path='*' component={Error} />
      </Switch>
    </Router>
  );
};

export default ReactRouterSetup;

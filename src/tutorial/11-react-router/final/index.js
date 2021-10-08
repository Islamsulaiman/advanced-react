import React from "react";
// react router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// pages
import Home from "./Home";
import About from "./About";
import People from "./People";
import Error from "./Error";
import Person from "./Person";
// navbar
import Navbar from "./Navbar";
const ReactRouterSetup = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='*' component={Error} />
        <Route path='/about'>
          <About />
        </Route>
        {/*This is a different way to add a route */}
        <Route path='/people' component={People} />{" "}
        <Route path='/person/:id' children={<Person />}></Route>
      </Switch>
    </Router>
  );
};

export default ReactRouterSetup;

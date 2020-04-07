import React from "react";

// react router dom
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// pages
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
// global components
import Layout from "./components/Layout";

const App = () => {
  return (
    <Layout>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/gallery">
            <Gallery />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Router>
    </Layout>
  );
};

export default App;

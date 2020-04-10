import React from "react";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";

import "../flexbox/flexboxgrid.css";

const Home = () => {
  return (
    <div>
      <Hero>
        <Link to="/" className="bt bt-primary">
          book us now
        </Link>
      </Hero>
      <div className="container">
        <h1>Home</h1>
      </div>
    </div>
  );
};

export default Home;

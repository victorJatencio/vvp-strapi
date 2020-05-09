import React from "react";
import Hero from "../components/Hero";
import Cta from "../components/Cta";

import "../flexbox/flexboxgrid.css";

const Home = () => {
  return (
    <>
      <Hero>
        <Cta className="primary">book us now</Cta>
      </Hero>
      <div className="container">
        <h1>Home</h1>
      </div>
    </>
  );
};

export default Home;

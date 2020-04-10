import React from "react";

import BackgroundVideo from "../components/backgroundVideo/BackgroundVideo";

const Hero = ({ children }) => {
  return (
    <div className="hero">
      <div className="banner">
        <BackgroundVideo>
          <h1 className="h1">Welcome to Velis Video Productions</h1>
          <h5 className="h5">We provide the best service for any event</h5>
          {children}
        </BackgroundVideo>
      </div>
    </div>
  );
};

export default Hero;

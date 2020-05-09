import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="container">
      <div className="error--container">
        <h1>Ooops! It's a dead end...</h1>
        <Link to="/" className="btn btn--primary">
          Back to home
        </Link>
      </div>
    </div>
  );
};

export default Error;

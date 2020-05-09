import React from "react";
import { Link } from "react-router-dom";

import HeaderTopBar from "./HeaderTopBar";
import logo from "../../assets/vvp.svg";
// import HeaderClasses from "./Header.module.scss";

const Header = () => {
  return (
    <>
      <HeaderTopBar />
      <header className="header">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="logo">
                <img src={logo} alt="Velis Video Production" />
              </div>
            </div>
            <div className="col-md-6">
              <nav className="nav">
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/gallery">Gallery</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

import React from "react";
import { Link } from "react-router-dom";

import HeaderTopBar from "./HeaderTopBar";
import HeaderClasses from "./Header.module.scss";

const Header = () => {
  return (
    <div>
      <HeaderTopBar />
      <div className="header-wrap">
        <header className="header">
          <nav>
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
        </header>
      </div>
    </div>
  );
};

export default Header;

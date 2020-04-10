import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTelegramPlane,
  FaPhone,
} from "react-icons/fa";
import HeaderTopClasses from "./HeaderTopBar.module.scss";

const HeaderTopBar = () => {
  return (
    <div className={HeaderTopClasses.headerTopWrap}>
      <div className={HeaderTopClasses.siteHeaderTop}>
        <div className="site-header-top-inner container">
          <div className={HeaderTopClasses.level}>
            <div className="levelLeft">
              <ul className={HeaderTopClasses.topbarInfo}>
                <li>
                  <FaTelegramPlane style={{ fontSize: "13px" }} />
                  <Link to="/">info@velisvideoproductions.com</Link>
                </li>
                <li>
                  <FaPhone style={{ fontSize: "13px" }} />
                  <Link to="/">+973-555-2424</Link>
                </li>
              </ul>
            </div>
            <div className="levelRight">
              <ul className={HeaderTopClasses.social}>
                <li>
                  <Link to="/">
                    <FaFacebook />
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <FaInstagram />
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <FaYoutube />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTopBar;

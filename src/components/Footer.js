import React from "react";
import logo from "../assets/vvp.svg";
import styled from "styled-components";
// turn this navigation in to a component latter...
import { Link } from "react-router-dom";
import { MdLocationOn, MdSend, MdStayPrimaryPortrait } from "react-icons/md";

const FooterText = styled.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.8rem;
  font-weight: 300;
`;

const FooterHeaders = styled.p`
  color: rgba(255, 255, 255, 0.9);
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 1.2rem;
`;

const FooterNav = styled.ul`
  list-style: none;

  li {
    a {
      color: rgba(255, 255, 255, 0.7);
      text-decoration: none;

      &:hover {
        color: #1f72ff;
      }
    }
  }
`;

const FooterContact = styled.ul`
  list-style: none;

  li {
    margin: 1rem 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    color: rgba(255, 255, 255, 0.7);

    p {
      margin-left: 1rem;
    }
  }
`;

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="logo">
              <img src={logo} alt="Velis Video Production" />
            </div>
            <FooterText className="footer-text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              aperiam vel, libero debitis tempore ea, quaerat expedita laborum
              dolorem asperiores blanditiis ullam est odio, maiores quidem. Unde
              consectetur eum eius?
            </FooterText>
          </div>
          <div className="col-md-4">
            <FooterHeaders>Quick Links</FooterHeaders>
            <div>
              <FooterNav>
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
              </FooterNav>
            </div>
          </div>
          <div className="col-md-4">
            <FooterHeaders>Contact Us</FooterHeaders>
            <div>
              <FooterContact>
                <li>
                  <MdLocationOn />
                  <FooterText className="footer-text">
                    123 St. Lorence Ville Street, Suite 5 <br />
                    ZIP 09928 Some Town, Georgia
                  </FooterText>
                </li>
                <li>
                  <MdSend />
                  <FooterText className="footer-text">
                    velisvideoproduction@example.com
                  </FooterText>
                </li>
                <li>
                  <MdStayPrimaryPortrait />
                  <FooterText className="footer-text">[973]555-1234</FooterText>
                </li>
              </FooterContact>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

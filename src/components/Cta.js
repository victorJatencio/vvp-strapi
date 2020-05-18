import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const BtnComponent = styled(Link)`
  padding: 1rem 2.5rem;
  text-transform: uppercase;
  text-decoration: none;
  background-color: ${(props) => props.primary || "#1f72ff"};
  color: ${(props) => props.color || "#fff"};
  transition: all 0.2s ease-in;
  display: inline-block;

  &:hover {
    background-color: ${(props) => props.bkg || "#1f94ff"};
  }
`;

const Cta = ({ to, bkg, color, className, children }) => {
  return (
    <>
      <BtnComponent to={to} className={className} color={color} bkg={bkg}>
        {children}
      </BtnComponent>
    </>
  );
};

export default Cta;

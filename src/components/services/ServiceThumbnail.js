import React from "react";
import styled from "styled-components";

import Cta from "../Cta";

import "./services.scss";

const Thumbnail = styled.div`
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  overflow: hidden;

  &.tile {
    color: #fff;
    padding: 2rem;
  }
  &.tile:first-child {
    grid-row-start: 1;
    grid-row-end: 3;
    padding: 2rem 8rem 2rem 6.5rem;
  }
`;

const ServiceThumbnail = ({ title, text, imagePath, className }) => (
  <Thumbnail
    style={{
      backgroundImage: `url(${imagePath})`,
    }}
    className={className}
  >
    <div className="overlay"></div>
    <div className="thumbnail-content">
      <h3 className="h3">{title}</h3>
      <div dangerouslySetInnerHTML={{ __html: text }} />
      <div className="bt-block">
        <Cta to="/">Book us now</Cta>
      </div>
    </div>
  </Thumbnail>
);

export default ServiceThumbnail;

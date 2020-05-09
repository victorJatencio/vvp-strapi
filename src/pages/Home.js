import React from "react";
import Hero from "../components/Hero";
import Cta from "../components/Cta";
import { MdLocalMovies, MdCamera } from "react-icons/md";
import styled from "styled-components";

import "../flexbox/flexboxgrid.css";

const MdIconVideo = styled(MdLocalMovies)`
  color: #1f72ff;
  width: 4em;
  height: 4em;
`;

const MdIconPhoto = styled(MdCamera)`
  color: #1f72ff;
  width: 4em;
  height: 4em;
`;

const Home = () => {
  return (
    <>
      <Hero>
        <Cta to="/" className="primary">
          book us now
        </Cta>
      </Hero>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <small className="running-headers">Grow to know us</small>
              <h3 className="h3 padding-right">
                <span className="header-highlight">Enjoy the Best</span>
                <br />
                Photography, Video Production and More
              </h3>
              <p className="text-block padding-right">
                Founded by a group of independent filmmakers, we've never even
                dreamt to achieve sucha high level of recognition we have now in
                the industry! Over the course of the last years, we were able to
                assemble a mighty team of FX experts, filmmaking pros, and
                passionate video editors! Every single one of our clients has
                told us at some point that considering just how hight quality of
                our work is, the cost of it is just incredibly affordable...
              </p>
              <div>
                <Cta to="/" className="primary">
                  read more
                </Cta>
              </div>
            </div>
            <div className="col-md-6">
              <div className="content-block">
                <MdIconVideo />
                <h3 className="h3">Video Services</h3>
                <p className="text-block">
                  With the live streaming being an absolutely integral part of
                  the world of today, if your live events are to be
                  professional, you'll need...
                </p>
              </div>
              <div className="content-block">
                <MdIconPhoto />
                <h3 className="h3">Photography Services</h3>
                <p className="text-block">
                  We have many years of experience and most of all, people who
                  will not let you down. We can not wait to show you what we can
                  do for you...
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

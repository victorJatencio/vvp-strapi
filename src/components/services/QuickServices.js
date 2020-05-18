import React from "react";
import styled from "styled-components";
import ServiceThumbnail from "../services/ServiceThumbnail";
import image_one from "../../assets/service-01.jpg";
import image_two from "../../assets/service-02.jpg";
import image_three from "../../assets/service-03.jpg";
import image_four from "../../assets/service-04.jpg";
import image_five from "../../assets/service-05.jpg";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  grid-template-rows: 1fr auto auto;
`;

class QuickServices extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          id: 1,
          title: "Events",
          text: `<p>When we are talking about any kind of a personal event, be it a
            private party, a bachelorette party, birthday or what not, it is
            never a bad idea to bring in experts who will capture the best
            moments of your special event.</p>
            <p>This is exactly what out creative video and photography craft is all
            about. With a range of skills up our sleeves.</p>
            `,
          imagePath: image_one,
          linkTo: "/",
        },
        {
          id: 2,
          title: "Birthdays",
          text: null,
          imagePath: image_two,
          linkTo: "/",
        },
        {
          id: 3,
          title: "Weddings",
          text: null,
          imagePath: image_three,
          linkTo: "/",
        },
        {
          id: 4,
          title: "Personal Events",
          text: null,
          imagePath: image_four,
          linkTo: "/",
        },
        {
          id: 5,
          title: "Bachelorette",
          text: null,
          imagePath: image_five,
          linkTo: "/",
        },
      ],
    };
  }
  render() {
    return (
      <Grid className="services">
        {this.state.sections.map(({ id, title, text, imagePath }) => (
          <ServiceThumbnail
            className="tile"
            key={id}
            title={title}
            text={text}
            imagePath={imagePath}
          />
        ))}
      </Grid>
    );
  }
}

export default QuickServices;

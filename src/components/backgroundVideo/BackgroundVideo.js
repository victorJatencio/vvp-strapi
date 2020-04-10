import React from "react";

import TestVideo from "./test-video.mp4";
import classes from "./BackgroundVideo.module.scss";

const BackgroundVideo = ({ children }) => {
  // const videoSource = "some https link";
  return (
    <div className={classes.Container}>
      <video autoPlay="autoplay" loop="loop" muted className={classes.Video}>
        <source src={TestVideo} type="video/mp4" />
        Your browser does not support video tag.
      </video>

      <div className={classes.Content}>
        <div className={classes.SubContent}>{children}</div>
      </div>
    </div>
  );
};

export default BackgroundVideo;

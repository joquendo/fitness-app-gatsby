import React from 'react';
import fitnessVideo from "../../static/assets/vllo.mp4"

export default function VideoPlayer() {
    const videoStyles = {
        width: '100%'
    };

    return (
      <video controls autoPlay muted style={videoStyles}>
        <source src={fitnessVideo} type="video/mp4" />
      </video>
    );
  }
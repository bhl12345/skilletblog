import React from 'react';
import ReactPlayer from "react-player";
import mp3_file from "../audio/peasantcast.mp3";

function AudioPlayer() {
  return (
    <div>
      <h3>Coming Soon The - <a style={{color:`#663399`}} href="https://www.pontificating-peaseant.com">Peasant Podcast</a></h3>
      <ReactPlayer
        url={mp3_file}
        width="550px"
        height="50px"
        playing={false}
        controls={true}
      />
    </div>
  );
}

export default AudioPlayer;
import React from 'react';
import ReactPlayer from "react-player";

function AudioPlayer() {
  return (
    <div>
      <h3>Coming Soon The - <a style={{color:`#663399`}} href="https://www.pontificating-peaseant.com">Peasant Podcast</a></h3>
      <ReactPlayer
        url="https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3"
        width="550px"
        height="50px"
        playing={false}
        controls={true}
      />
    </div>
  );
}

export default AudioPlayer;
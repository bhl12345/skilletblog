import React, { Component } from 'react'
import ReactPlayer from "react-player";

class AudioPlayer extends Component {

  render () {
  return (
    <div>
      <h3>Listen To The - <a href="https://www.pontificating-peasant.com">Peasant Podcast</a></h3>
      <ReactPlayer
        url="https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3"
        width="545px"
        height="50px"
        playing={false}
        controls={true}
      />
    </div>
  );
  }
}

export default AudioPlayer;
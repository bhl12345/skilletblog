import React, { Component } from 'react'
import ReactPlayer from "react-player";

class AudioPlayer extends Component {

  render () {
  return (
    <div>
      <h3>Coming Soon The - <a href="https://www.pontificating-peasant.com">Peasant Podcast</a></h3>
      <ReactPlayer
        url="https://github.com/bhl12345/skilletblog/blob/master/src/audio/01%20Show%20Me%20The%20Way%20(Live).mp3"
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
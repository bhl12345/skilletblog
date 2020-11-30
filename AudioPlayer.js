import React from 'react';
import ReactPlayer from "react-player";

function App() {
  return (
    <div>
      <h3>Audio player in React - <a href="https://www.cluemediator.com">Clue Mediator</a></h3>
      <ReactPlayer
        url="https://github.com/bhl12345/skilletblog/blob/master/src/audio/01%20Show%20Me%20The%20Way%20(Live).mp3"
        width="550px"
        height="50px"
        playing={false}
        controls={true}
      />
    </div>
  );
}

export default App;
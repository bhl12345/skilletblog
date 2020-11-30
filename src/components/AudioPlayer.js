import React from 'react';
import ReactPlayer from "react-player";

function App() {
  return (
    <div>
      <h3>Audio player in React - <a href="https://www.cluemediator.com">Clue Mediator</a></h3>
      <ReactPlayer
        url="https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3"
        width="400px"
        height="50px"
        playing={false}
        controls={true}
      />
    </div>
  );
}

export default App;
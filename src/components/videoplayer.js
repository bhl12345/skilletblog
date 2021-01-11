import React from "react"
import { Player } from "video-react"
import "./video-react.css";
 import mp4_file from "../audio/Wireframe.mp4"

export default (props) => {
    return (
        <div>
      <Player>
        <source src={mp4_file} />
      </Player>
      </div>
    );
  };
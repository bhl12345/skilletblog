import React from 'react';
import ReactPlayer from "react-player";
import mp3_file from "../audio/peasantcast.mp3";
import Logo from "../images/pontificating2.jpg";
 

function AudioPlayer() {
  return (
   
    <div >
        
     
      <img style={{position: 'relative', display: 'inline-block', left: '50%', transform: 'translate(-50%)'}} src={Logo} alt="Logo" shader="spring"  /> 
      <div>
     
      <h3>Click and listen to the - <a style={{color:`#663399`}} href="https://www.pontificating-peaseant.com">The Peasant Pontificate</a></h3>
      <ReactPlayer
        url={mp3_file}
        width="550px"
        height="50px"
        playing={false}
        controls={true}
      />
      </div>
    </div>
  );
}

export default AudioPlayer;
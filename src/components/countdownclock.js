import React, { Component } from 'react';
import Countdown from './countdown.js';
 
 

class Countdownclock extends Component {
  render() {
    const currentDate = new Date();
    const year = (currentDate.getMonth() === 1 && currentDate.getDate() > 23) ? currentDate.getFullYear() + 1 : currentDate.getFullYear();
    return (
      <div className="App">
        <div className="App-header">
        
        </div>
        <div style={{position:"right"}}>
        <h3 className="title" style={{color: "#E7D716" }}>He is gone, He is gone indeed!</h3>
        <Countdown date={`${year +0}-01-20T12:00:00`} />
        </div>
      </div>
    );
  }
}

export default Countdownclock;
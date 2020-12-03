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
        <h3 className="title" style={{color: "#E7D716", position:"right"}}>Days left until the Orange Menace is evicted!</h3>
        <Countdown date={`${year +1}-01-20T00:00:00`} />
      </div>
    );
  }
}

export default Countdownclock;
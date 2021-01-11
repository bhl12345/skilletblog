import React, { Component } from 'react'
import Typical from 'react-typical'

class ScrollText extends  Component {
  render () {
    return (
        <h1     style={{
          gridArea: "header",
          background: "white",   
          textAlign: "center",
          color: "#E7D716",
          fontSize: "30px",
          width: "100%",
          fontFamily: "Sofia",
          textShadow: "0  8px black, 0 0 8px black, 0 0 8px black, 0 0 8px black "  
          }}>
      <Typical
        steps={['No human is good enough to govern another without the other\'s consent!!!!',
         2000,'',300 ]}
        loop={Infinity}
        wrapper="p"
      />
      </h1>
    )
  }
}
export default ScrollText
import React, { Component } from 'react'
import Typical from 'react-typical'

class ScrollText extends React.Component {
  render () {
    return (
        <h1>
      <Typical
        steps={['No human is good enough to govern another without the others consent!!!!',
         2000,'',300 ]}
        loop={Infinity}
        wrapper="p"
      />
      </h1>
    )
  }
}
export default ScrollText
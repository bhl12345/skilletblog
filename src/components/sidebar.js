/**
 * 
 */
import React, { Component } from 'react'
import Logo from "../images/pontificate.png"

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar"   data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside>
            <div className="text-center">
            <img src={Logo} alt="Logo" />;
            <br/>
            <br/>
              <span className="email"><i></i>bhl12345@pontificating-peasant.com</span>
            </div>
            <nav >
              <div>
                <ul>
                <h3>Resources of Facts</h3>
                <a href="https://usafacts.org/">USAFacts</a>
                <br/>
                <br/>
                <a href="https://www.snopes.com/">Check The Facts</a>
                </ul>
              </div>
            </nav>
          </aside>
        </div>
      </div>
    )
  }
}
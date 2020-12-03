/**
 * 
 */
import React, { Component } from 'react'
import Logo from "../images/pontificate.png"
import LifeHack from "../components/LifeHack"
import Newslist from "../components/newslist/Newslist"
import CCF from "../pages/climatechangefeed"

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar"   data-toggle="collapse" data-target="#navbar"   aria-controls="navbar"><i /></nav>
          <aside>
            <div className="text-center">
            <img src={Logo} alt="Logo" />
            <br/>
            <br/>
              <span className="email"><i></i>pontificate@pontificating-peasant.com</span>
            </div>
            <nav >
              <div>
                <ul>
                <h3>Vote or Create a poll question</h3>
                <a href= "https://polling-app-client.herokuapp.com/">Peasant Polls</a>
                <h3>Resources</h3>
                <a href="https://usafacts.org/">USAFacts</a>
                <br/>
                <br/>
                <a href="https://www.snopes.com/">Check The Facts</a>
                </ul>
                <LifeHack/>
                <br/>
                <Newslist  />
                <CCF/>    
               <br/>
              </div>
            </nav>
          </aside>
        </div>
      </div>
    )
  }
}
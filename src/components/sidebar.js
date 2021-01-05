/**
 * 
 */
import React, { Component } from 'react'
import * as VFX from 'react-vfx'
import Logo from "../images/pontificating.jpg"
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
            <VFX.VFXProvider>
            <VFX.VFXImg src={Logo} alt="Logo" shader="spring" />
            </VFX.VFXProvider>
            <br/>
            <br/>
              <span className="email"><i></i>pontificate@pontificating-peasant.com</span>
            </div>
            <nav >
              <div>
               <br/>
              </div>
            </nav>
          </aside>
        </div>
      </div>
    )
  }
}
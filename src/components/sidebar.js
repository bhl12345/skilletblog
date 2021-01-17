/**
 * 
 */
import React, { Component } from 'react'
import * as VFX from 'react-vfx'
import Logo from "../images/pontificating.png"
import FactCheck from "../components/FactCheckfeed"


 
export default class Sidebar extends Component {


  render() {
    return (
      <div>
        <div>
          <nav href="#navbar"   data-toggle="collapse" data-target="#navbar"   aria-controls="navbar"><i /></nav>
          <aside>
            <div className="text-center">
            <VFX.VFXProvider>
            <img src={Logo} alt="Logo" shader="spring" />
            </VFX.VFXProvider>
            <br/>
            <br/>
              <span className="email"><a href="mailto:pontificatingpeasant@gmail.com">pontificatingpeasant@gmail.com</a></span>  
              <FactCheck style={{color:`#663399`}}/>  
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
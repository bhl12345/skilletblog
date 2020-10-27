/**
 * Layout component that queries for data with Gatsby's useStaticQuery component
 * 
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import "./layout.css"
import Newslist from "../components/newslist/Newslist"
import Sidebar from "../components/sidebar"
import FactCheck from "../components/FactCheckfeed"
import CCF from "../pages/climatechangefeed"
import Logo from "../images/3kinds.jpg"
import HyvorTalk from 'hyvor-talk-react'
 
 

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  return (
    < >
    
    <div className="gridContainer">
    <Header style={{justifyContent: "left"}}  siteTitle={data.site.siteMetadata?.title || `Title`  } />
    <div className="left" style={{color:`#663399`}}>
    <Sidebar />  
       </div>     
     <div className="middle" >
	 <h3>The lyrics couldn't be more accurate for our current times. That is why people are "Taking it to the Streets"
	 </h3>
	 <iframe width="560" height="315" src="https://www.youtube.com/embed/s_dUQAZQ2vE" frameborder="0" 
		 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
	     allowfullscreen></iframe>
	     <br/>
     <h3>Watch and see why it is alot harder than it should be</h3>
     <iframe width="560" height="315" src="https://www.youtube.com/embed/xtdU5RPDZqI"
    	 frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    		 allowfullscreen></iframe>
    </div>
     <div style={{padding: "20px"}}>{children}</div>
     <div style={{color:`#663399`}}>
     <FactCheck/>
     <br/>
     <Newslist  />
     <CCF/>    
    <br/>
     </div>
      </div>
      <div>
      <footer className="footer" >
      © {new Date().getFullYear()}, Built with
      {` `}
      <a style={{color:`#663399`}} href="https://www.gatsbyjs.com">Gatsby</a>
    </footer>
    </div>

    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

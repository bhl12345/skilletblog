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
      <div className="middle" >{children} 
     </div>
     <div style={{color:`#663399`}}>
    <Newslist  />
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

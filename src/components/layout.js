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
import { BrowserRouter as Router, Route } from "react-router-dom";
import Newslist from "../components/newslist/Newslist"
 

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
      <div className="left" style={{backgroundColor:"`#663399`"}}>
       <h2>Resources of Facts</h2>
       <a href="https://usafacts.org/">USAFacts</a>
       <a href="https://www.snopes.com/">Check The Facts</a>
       </div>
      <div className="middle" >{children} 
 
     </div>
     <div>
    <Newslist/>
     </div>
      </div>
      <div>
      <footer className="footer">
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.com">Gatsby</a>
    </footer>
    </div>

    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

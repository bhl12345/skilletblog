/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import dumbDon from "../images/dumbtrump.jpg"
import "./layout.css"
 

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
      <div className="left" style={{backgroundColor:"`#663399`"}}>{children}</div>
      <div className="middle" >    
     </div>
     <div className="right" style={{backgroundColor:"`#663399`"}}>
     <img src={dumbDon} alt="Flowers in Chania" /> 
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

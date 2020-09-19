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
import logo from "../images/pontificate.png"
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
      <Header siteTitle={data.site.siteMetadata?.title || `Title`  } /> 
      <h2 style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",      
        }}>
      {data.site.siteMetadata?.description || `Description`} </h2>  
      <main>{children}</main>
      <div>     
     <center> <img src={logo} alt="Flowers in Chania" /> </center>
        <br></br>
        <center><img src={dumbDon} alt="Flowers in Chania" /></center>
        
        <footer style={{
          marginTop: `2rem`,          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
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

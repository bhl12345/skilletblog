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
    <div className="gridContainer">
      <Header  siteTitle={data.site.siteMetadata?.title || `Title`  } />  
      <div className="left" style={{backgroundColor:"#f1f1f1"}}>{children}</div>
      <div className="middle" style={{backgroundColor:"#f1f1f1"}}>
       <img src={logo} alt="Flowers in Chania" />   
     <br></br>
      <img src={dumbDon} alt="Flowers in Chania" /> 
     </div>
     <div className="right" style={{backgroundColor:"#ccc"}}>Column</div>
      </div>
      <div>       
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

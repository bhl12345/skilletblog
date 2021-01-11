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
import Sidebar from "./sidebar"
import AudioPlayer from "./audioplayer"
import Scroll from "./scrolltext"
 
 
 
const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
          
        }     
      }
  markdownRemark(frontmatter: {featuredImage: {childImageSharp: {}}}) {
    id
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
     <div className="middle" style={{color:`#663399`}} >

     <ull style={{width: "560"}}>
       <div>
       <Scroll style={{fontSize: `125px`}}/>
       </div>
       <div>  </div>
       <div>
     <AudioPlayer style={{justifyContent: "center"}}/>
     </div>
     <br/>
     <br/>
     <h2>Hilarious</h2>
     <iframe title="Sediton" width="560" height="315" src="https://www.youtube.com/embed/wT5kafhG3Qw" frameborder="0" 
     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
     <h2>Covid becomes reality for the deniers</h2>
     <iframe title="Covid Reality" width="560" height="315" src="https://www.youtube.com/embed/kwC2yH4Hpv0" frameborder="0" 
     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <h2>Watch and see why it is harder than it should be</h2>
     <iframe title="Harder" width="560" height="315" src="https://www.youtube.com/embed/xtdU5RPDZqI"
    	 frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    	 allowfullscreen="true"></iframe>
    	</ull>
    </div> 
    <div >
  </div>
  <br/>
     <div className="right" style={{fontSize: "20px" ,padding: "20px"}}>
      <ul> 
     <br/>     
     <h2 style={{color:`#663399`}}>Peasant Posts</h2>
       {children}  
       </ul>
     </div>
     <div style={{color:`#663399`}}>
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

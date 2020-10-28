import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
 


const Header = ({ siteTitle }) => (
  <header
    style={{
    gridArea: "header",
    background: "rebeccapurple",   
    textAlign: "center",
    fontSize: "25px",
    width: "100%",
    
    }}
  >
    <div
    
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        align:`center`,
        
      }} 
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
            textAlign: `center`,
            fontFamily: `Sofia`,
            textShadow: `0  7px black, 0 0 5px black, 0 0 5px black, 0 0 5px black`
           
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <h3 style={{
          color: `white`, fontFamily: `Sofia`,
          textShadow: `0 0 7px black, 0 0 5px black, 0 0 5px black, 0 0 5px black`
        }}>You don't have to be rich to have a view that matters.</h3>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Countdown from "./countdownclock"



const Header = ({ siteTitle }) => (
  <header
    style={{
    gridArea: "header",
    background: "#663399",   
    textAlign: "center",
    fontSize: "25px",
    width: "100%",
    fontFamily: "Sofia",
    textShadow: "0  7px black, 0 0 5px black, 0 0 5px black, 0 0 5px black"  
    }}
  >
    <div
    
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.00rem 1.0875rem`,
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
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <h3 style={{
          color: `white`, fontFamily: `Sofia`,
          textShadow: `0 0 7px black, 0 0 5px black, 0 0 5px black, 0 0 5px black`
        }}>You don't have to be rich to have a view that matters.</h3>
    <Countdown style={{color: "white", margin: `0 auto`, positon:'right'}}/>
    </div>
        <div>     
        <script type="text/javascript">var subscribersSiteId='e4f7886e-e9cf-4777-8f78-e8d18f0cedd9';
        </script><script type="text/javascript"
        	src="https://cdn.subscribers.com/assets/subscribers.js"></script>
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

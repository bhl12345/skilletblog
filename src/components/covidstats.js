import React, { useState } from 'react';
 
import axios from 'axios';
 

function Covidstats() {
  const [deaths, setDeaths] = useState(null);

  const fetchData = async () => {
    const response = await axios.get(
      'https://corona.lmao.ninja/v2/countries/us?yesterday=true&strict=true&query'
    );
    setDeaths(response.data);
  };

 
      return (
    		    <div style={{
    		    backgroundcolor: `white`,
    		    position: `absolute`,
    		    right: `10px`,
    		    width: `100px`,
    		    gridArea: `right`,
    		    display: `grid`,
    		    top: `0px`,
    		    
    		       }} className="deaths">
    		      <h3>Covid Deaths</h3>
    		      {/* Fetch data from API */}
    		      <div>
    		        <button style={{         
    		            textDecoration: `none`,
    		             align: `right`,
    		          }} className="fetch-button" onClick={fetchData}>
    		          Click for current Death Total
    		        </button>
    		        <br />
    		      </div>

    		      {/* Display data from API */}
    		      <div className="deaths">
    		        {deaths &&
    		          [deaths].map((death, index) => {
    		            return (
    		              <div className="death" key={index}>
    		                <h4>Deaths</h4>
    		                <h4>{deaths.deaths}</h4>
    		              </div>
    		            );
    		          })}
    		      </div>
    		    </div>
      );
    
}

export default Covidstats;
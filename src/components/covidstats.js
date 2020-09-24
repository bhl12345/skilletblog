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
    		    <div className="">
    		      <h2>Covid Deaths</h2>
    		      {/* Fetch data from API */}
    		      <div>
    		        <button className="fetch-button" onClick={fetchData}>
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
    		                <h3>Death {index + 1}</h3>
    		                <h2>{deaths.deaths}</h2>
    		              </div>
    		            );
    		          })}
    		      </div>
    		    </div>
      );
    
}

export default Covidstats;
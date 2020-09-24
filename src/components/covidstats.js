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
    		    color: `white`,
    		    float: `right`,
    		    right: `0px`,
    		    width: `20%`,
    		    gridArea: `right`,
    		    display: `grid`,
    		    top: `3px`,  
    		       }} className="deaths">
    		   
    		      {/* Fetch data from API */}
    		      <div  > 
    		        <button style={{   
    		        	
    		            background:`none`,
    		            border:`none`, 
    		            float: `right`,         
    		            right: `0px`,
    	    		    display: `grid`,
    	    		    gridArea: `right`,            
    		             fontSize: `10px`,           
    		             top: `0px`,
    		             right: `10px`,
    		             width: `50%`,
    		             color: `white`,
    		          }} className="fetch-button" onClick={fetchData}>
    		          Click for current U.S. Death Total
    		        </button>
    		       
    		      </div>

    		      {/* Display data from API */}
    		      <div style={{  
    		  	        display: `grid`,
	    		        gridArea: `right`,
    		            textDecoration: `none`,
    		             right: `10px`,       
    		             fontSize: `15px`,           
    		             top: `5px`, 
    		             color: `white`,
    		             float: `right`,
		          }}className="deaths">
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
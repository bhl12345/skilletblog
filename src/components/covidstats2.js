  import React, { Component } from "react";

    export default class Covidstats2 extends Component  {
    
      

      async componentDidMount()  {
        try {
        	  
        	 
          const response = await fetch(
            "https://corona.lmao.ninja/v2/countries/us?yesterday=true&strict=true&query"
          );
         
          
        
          this.setState({ response: deaths.deaths });
        } catch (error) {
          console.log(error);
        }
      }

      render() {
    	  const deaths =   response.json()
        return (
          <div >
            <h2>Covid Death Total:</h2>
            {[deaths].map(item => (
              <li key={deaths.deaths}>
                <a style={{color:`#663399`}} target="_blank" rel="noopener noreferrer" href={item.link}>
                  {item.title}
                </a>
              </li>
            ))}
          </div>
        );
      }
    }
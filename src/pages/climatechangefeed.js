  import React, { Component } from "react";

    export default class ClimateChangeFeed extends Component {
      constructor() {
        super();
        this.state = {
          items: []
        };
      }

      async componentDidMount() {
        try {
          const response = await fetch(
            "https://api.rss2json.com/v1/api.json?rss_url=https://news.un.org/feed/subscribe/en/news/topic/climate-change/feed/rss.xml"
          );
          const json = await response.json();
          this.setState({ items: json.items });
        } catch (error) {
          console.log(error);
        }
      }

      render() {
        console.log(this.state);
        return (
          <div >
            <h2>Climate Change News</h2>
           
            {this.state.items.map(item => (
              <li key={item.guid}>
                <a style={{color:`#663399`}} target="_blank" rel="noopener noreferrer" href={item.link}>
                  {item.title}
                </a>
              </li>
            ))}
          </div>
        );
      }
    }
  import React, { Component } from "react";

    export default class Newslist extends Component {
      constructor() {
        super();
        this.state = {
          items: []
        };
      }

      async componentDidMount() {
        try {
          const response = await fetch(
            "https://api.rss2json.com/v1/api.json?rss_url=https://rss.nytimes.com/services/xml/rss/nyt/Politics.xml"
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
          <div>
            News from the New York Times:
            {this.state.items.map(item => (
              <li key={item.guid}>
                <a target="_blank" rel="noopener noreferrer" href={item.link}>
                  {item.title}
                </a>
              </li>
            ))}
          </div>
        );
      }
    }
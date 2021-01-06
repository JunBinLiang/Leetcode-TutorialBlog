import React, { Component } from "react";
import "./Error.css";

class Error extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <section className="error-container">
          <span className="four">
            <span className="screen-reader-text">4</span>
          </span>
          <span className="zero">
            <span className="screen-reader-text">0</span>
          </span>
          <span className="four">
            <span className="screen-reader-text">4</span>
          </span>
        </section>
      </div>
    );
  }
}

export default Error;

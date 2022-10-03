import React, { Component } from "react";

export class Spinner extends Component {
  render() {
    return (
      <div
        className="spinner-grow" 
        style={{width: "2rem", height: "2rem", color: "coral"}}
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }
}

export default Spinner;

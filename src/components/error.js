import React, { Component } from "react";
import crash from "../assets/crash.png";

export class Error extends Component {
  render() {
    return (
      <div className="error">
                <h1>City not found !</h1>
        <h3>{this.props.dataErorr}</h3>
        <h3>Error status: {this.props.dataStatus}</h3>
      </div>
    );
  }
}

export default Error;

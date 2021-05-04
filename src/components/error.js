import React, { Component } from "react";
import crash from "../assets/crash.png";

export class Error extends Component {
  render() {
    return (
      <div className="error">
        <h3>{this.props.dataErorr}</h3>
        <h3>{this.props.dataStatus}</h3>
        <img src={crash} style={{ width: "6rem" }} className="logo" />
      </div>
    );
  }
}

export default Error;

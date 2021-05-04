import React, { Component } from "react";

export class Weather extends Component {
  render() {
    return this.props.weatherData.map((data) => {
      return (
        <div>
          <h3>{data.date}</h3>
          <h3>{data.description}</h3>
        </div>
      );
    });
  }
}

export default Weather;

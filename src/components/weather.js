import React, { Component } from "react";
import Table from 'react-bootstrap/Table';

export class Weather extends Component {
  render() {
    return (
      <div>
      <Table striped bordered hover size="sm" className="weatherTable">
      <thead>
        <tr>
          <th>Date</th>
          <th>Weather Description</th>
        </tr>
      </thead>
      <tbody>
      {this.props.weatherData.map((data) => {
      return (
            <tr>
              <td>{data.date}</td>
              <td>{data.description}</td>
            </tr>      
      );
    })}
    </tbody>
      </Table>
    </div>
    )
  }
}

export default Weather;

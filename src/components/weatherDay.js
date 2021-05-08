import React, { Component } from 'react';
// import Table from 'react-bootstrap/Table';

export class WeatherDay extends Component {
    render() {
        return (
            <>
              <td>{this.props.date}</td>
              <td>{this.props.description}</td>
            </>
        )
    }
}

export default WeatherDay

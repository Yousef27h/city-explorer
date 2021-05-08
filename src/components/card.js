import React, { Component } from "react";
import Card from "react-bootstrap/Card";

export class CardClass extends Component {
  render() {
    return (
      <div>
        <Card style={{ width: "18rem" }} className="card" className="mapCard">
          <Card.Img
            variant="top"
            src={`https://maps.locationiq.com/v3/staticmap?key=pk.8df7f8bc5dee816b49ba58eb0d0e7367&center=${this.props.lat},${this.props.lon}`}
            width="300px"
            id="cardImg"
          />
          <Card.Body>
            <Card.Title>{this.props.display_name}</Card.Title>
            <Card.Text>
              Longitude: {this.props.lon}
              <br />
              Latitude: {this.props.lat}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default CardClass;

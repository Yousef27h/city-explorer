import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

export class form extends Component {
  render() {
    return (
      <div>
        <Form onSubmit={this.props.handleSubmit} className="form">
          <Form.Label for="textForm">Location Name</Form.Label> <br />
          <Form.Control
            type="text"
            onChange={this.props.handleText}
            required
            id="textForm"
          />
          <Button type="submit" id="button">
            Explore!
          </Button>
        </Form>
      </div>
    );
  }
}

export default form;

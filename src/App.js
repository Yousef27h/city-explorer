import React from "react";
import "./App.css";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import Card from 'react-bootstrap/Card';
import earth from './assets/earth.png';

class App extends React.Component {
constructor(props){
  super(props);
  this.state={
    searchInput: "",
    data : "",
    show: false
  }
}

handleSubmit = async (event)=>{
  event.preventDefault();
  const url = `https://us1.locationiq.com/v1/search.php?key=pk.8df7f8bc5dee816b49ba58eb0d0e7367&q=${this.state.searchInput}&format=json`;
  const req = await axios.get(url);
  this.setState({
    data: req.data[0],
    show: true
  })
 console.log(req.data[0])
 if (this.state.data !== null){
   this.setState({
     show : true,
   })
 }
}
handleText = (event)=>{
this.setState({
  searchInput : event.target.value
})
}
render(){
  return (
    <div>
    <header>
    
      <img src={earth} style={{ width: '6rem'}} className="logo"/>
      <h1 className="title"> City Explorer</h1>
      </header>
      <main></main>
      <Form onSubmit={this.handleSubmit} className="form">
        <Form.Label for="textForm">Location Name</Form.Label> <br />
        <Form.Control type="text" onChange={this.handleText} required id="textForm"/>
        <Button type="submit" id="button">Explore!</Button>
      </Form>
      {this.state.show ? 
      (
      <Card style={{ width: '18rem'}} className="card">
      <Card.Img variant="top" src={`https://maps.locationiq.com/v3/staticmap?key=pk.8df7f8bc5dee816b49ba58eb0d0e7367&center=${this.state.data.lat},${this.state.data.lon}`} width="300px" id="cardImg"/>
      <Card.Body>
      <Card.Title>{this.state.data.display_name}</Card.Title>
      <Card.Text>
      Longitude: {this.state.data.lon}<br />
      Latitude: {this.state.data.lat}
      </Card.Text>
       </Card.Body>
      </Card>) : null}
    </div> 
  );
}
}

export default App;

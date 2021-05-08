import React, { Component } from "react";
// import CardDeck from "react-bootstrap/CardDeck";
// import Card from "react-bootstrap/Card";
import Carousel from 'react-bootstrap/Carousel'

export class Item extends Component {
  render() {
    let movieData = this.props.movieData;
    console.log(`movieData${movieData}`);
    return (
      <>
          <Carousel className="slideElement">
          {movieData.map((data) => {
            return (
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
                  alt=""
                  height= "750px"
                />
                <Carousel.Caption className="slideText">
                  <h2>{data.title}</h2>
                  <h4>Release Date: {data.release_date}</h4>
                  <h5>Votes: {data.vote_count} | Votes Average: {data.vote_average} | Popularity: {data.popularity}</h5>
                  <p>{data.overView}</p>
                </Carousel.Caption>
              </Carousel.Item>
                );
              })}
              </Carousel>
      </>
    );
  }
}

export default Item;

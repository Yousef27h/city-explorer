import React from "react";
import "./App.css";
import axios from "axios";
import earth from "./assets/earth.png";
import CardClass from "./components/card";
import SearchForm from "./components/form";
import Weather from "./components/weather";
import Error from "./components/error";
import Item from "./components/moviesCards";
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: "",
      data: "",
      weatherData: "",
      movieData: [],
      show: false,
      dataStatus: 200,
    };
  }

  handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_KEY}&q=${this.state.searchInput}&format=json`;
      const req = await axios.get(url);

      this.setState({
        data: req.data[0],
      });
    } catch (error) {
      this.setState({
        show: false,
        dataErorr: error.response.data.error,
        dataStatus: error.response.status,
      });
    }
    this.getMovie();
    this.getWeather();
  };

  getWeather = async () => {
    const myApi = await axios.get(
      `${process.env.REACT_APP_SERVER}/weather?lat=${this.state.data.lat}&lon=${this.state.data.lon}`
    );
    this.setState({
      weatherData: myApi.data,
      show: true,
    });
  };
  getMovie = async () => {
    const movieApi = await axios.get(
      `${process.env.REACT_APP_SERVER}/movies?query=${this.state.searchInput}`
    );
    console.log(movieApi.data)
    this.setState({
      movieData: movieApi.data,
    });
    this.movieFilter();
  };

  movieFilter = () => {
    let filterArr = this.state.movieData.map((item) => item.poster_path);
    // console.log(filterArr)
    let indexArr = filterArr.map((item, index) => item == null && true);
    let itemsArr = [];
    for (let i = 0; i < indexArr.length; i++) {
      if (indexArr[i] !== true) {
        itemsArr.push(this.state.movieData[i]);
      }
    }
    // console.log(itemsArr)
    this.setState({
      movieData: itemsArr,
    });
    console.log(this.state.movieData)
  };
  handleText = (event) => {
    this.setState({
      searchInput: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <header>
          <img src={earth} style={{ width: "6rem" }} className="logo" />
          <h1 className="title"> City Explorer</h1>
          <SearchForm
            handleSubmit={this.handleSubmit}
            handleText={this.handleText}
          className="formClass"/>
        </header>
        <main>
          {this.state.dataStatus !== 200 && (
            <Error
              dataStatus={this.state.dataStatus}
              dataErorr={this.state.dataErorr}
            />
          )}
          {this.state.show && (
            <>
              <CardClass
                lat={this.state.data.lat}
                lon={this.state.data.lon}
                display_name={this.state.data.display_name}
              />

              <Weather weatherData={this.state.weatherData} />
              <Item movieData={this.state.movieData}/>
            </>
          )}
        </main>
        <footer>
          <p>
            &copy; <b>Yousef Salem</b>
          </p>
        </footer>
      </div>
    );
  }
}

export default App;

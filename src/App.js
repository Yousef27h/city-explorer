import React from "react";
import "./App.css";
import axios from "axios";
import earth from "./assets/earth.png";
import CardClass from "./components/card";
import SearchForm from "./components/form";
import Weather from "./components/weather";
import Error from "./components/error";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: "",
      data: "",
      weatherData: "",
      show: false,
      dataStatus: 200,
    };
  }

  handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const url = `https://us1.locationiq.com/v1/search.php?key=pk.8df7f8bc5dee816b49ba58eb0d0e7367&q=${this.state.searchInput}&format=json`;
      const myApi = await axios.get("http://localhost:3001/weather");
      console.log(myApi);
      console.log(myApi.data);
      const req = await axios.get(url);
      this.setState({
        data: req.data[0],
        show: true,
        weatherData: myApi.data,
      });
      console.log(req.data[0]);
      if (this.state.data !== null) {
        this.setState({
          show: true,
        });
      }
    } catch (error) {
      this.setState({
        show: false,
        dataErorr: error.response.data.error,
        dataStatus: error.response.status,
      });
      console.log(this.state);
    }
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
          />
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

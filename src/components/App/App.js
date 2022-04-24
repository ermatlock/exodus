import React, { Component } from "react";
import "./App.css";
import { nanoid } from "nanoid";
import { Link } from "react-router-dom";
import DashBoard from "../DashBoard/DashBoard";
import { cityUIds } from "../../data";
import Loader from "../Loader/Loader";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {
  fetchCity,
  fetchDetails,
  fetchImages,
  fetchScores,
} from "../../apiCalls";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentCityName: "Albuquerque",
      currentCityId: "albuquerque",
      currentCityData: null,
      allCityData: null,
      favoriteCities: [],
      isLoading: false,
    };
  }

  async componentDidMount() {
    let currentCity = {
      id: this.state.currentCityId,
      cityBasics: await fetchCity(this.state.currentCityId),
      cityScores: await fetchScores(this.state.currentCityId),
      cityDetails: await fetchDetails(this.state.currentCityId),
      cityImages: await fetchImages(this.state.currentCityId),
      isfavorited: false,
    };
    this.setState({ allCityData: currentCity });
    this.setState({ currentCityData: this.cleanCityData(currentCity) });
  }

  cleanCityData = (data) => {
    let cleanedData = {
      name: !data.cityBasics.full_name
        ? "City Name Missing"
        : data.cityBasics.full_name,
      id: !data.id ? nanoid() : data.id,
      image: !data.cityImages.photos[0].image.mobile
        ? "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ncenet.com%2Fno-image-found&psig=AOvVaw30p53n61C-S7F5gmBwRYI4&ust=1650825656378000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCPjI1vzqqvcCFQAAAAAdAAAAABAt"
        : data.cityImages.photos[0].image.web,
      summary: data.cityScores.summary,
      country: data.cityBasics,
    };
    return cleanedData;
  };

  render() {
    return (
      <div className="App">
        <Header />
        {/* <Loader /> */}
        <DashBoard data={this.state.currentCityData} />
        <Footer />
      </div>
    );
  }
}

export default App;

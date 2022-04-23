import React, { Component } from "react";
import "./App.css";
// import { DataContextProvider } from "../../contexts/DataContext";
import DashBoard from "../DashBoard/DashBoard";
import Loader from "../Loader/Loader";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { cityUIds } from "../../data";
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
      currentCityData: null,
      citiesList: [],
      isLoading: false,
    };
  }

  async componentDidMount() {
    let tempCitiesList = cityUIds.map((city) => {
      return {
        id: city,
        cityBasics: fetchCity(city),
        cityScores: fetchScores(city),
        cityDetails: fetchDetails(city),
        cityImages: fetchImages(city),
      };
    });
    this.setState({citiesList: tempCitiesList})
  }

  // const cleanCityData = (cityData) => {
  //   const cleanedCity = {
  //     cityName: !cityData.cityBasics.full_name
  //       ? "City Name Missing"
  //       : cityData.cityBasics.full_name,
  //     tolerance: !cityData.uaScores.categories[15].score_out_of_10
  //       ? "Score Missing"
  //       : cityData.uaScores.categories[15].score_out_of_10.toFixed(2),
  //     summary: !cityData.uaScores.summary
  //       ? "No Summary Found"
  //       : cityData.uaScores.summary,
  //     id: !cityData.cityBasics.slug ? nanoid() : cityData.cityBasics.slug,
  //     images: !cityData.uaImages ? FiCameraOff : cityData.uaImages
  //   };
  //   return cleanedCity
  // };

  render() {
    return (
      <div className="App">
        <Header />
        {/* <Loader /> */}
        {/* <DataContextProvider> */}
        <DashBoard citiesList={this.state.citiesList} />
        {/* </DataContextProvider> */}
        <Footer />
      </div>
    );
  }
}

export default App;

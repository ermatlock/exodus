import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import { nanoid } from "nanoid";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ErrorPage from "../ErrorPage/ErrorPage";
import DashBoard from "../DashBoard/DashBoard";
import Favorites from "../Favorites/Favorites"
import {
  fetchCity,
  fetchDetails,
  fetchImages,
  fetchScores,
} from "../../apiCalls";
import {roundTo2, cleanCityData} from "../../utils"
import {favorites} from "../../data"

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentCityId: "buffalo",
      favorites: ["buffalo", "denver", "san-diego"],
      currentCityData: null,
      allCityData: null,
      isLoading: false,
      isClicked: false,
      // isFavorited: false
    };
  }

  async componentDidMount() {
    this.fetchMyStuff(this.state.currentCityId);
    console.log(this.state.currentCityData);
  }

  fetchMyStuff = (id) => {
    Promise.all([
      fetchCity(id),
      fetchScores(id),
      fetchDetails(id),
      fetchImages(id),
    ]).then((values) => {
      let currentCity = {
        cityBasics: values[0],
        cityScores: values[1],
        cityDetails: values[2],
        cityImages: values[3],
      };
      this.setState({ allCityData: currentCity, currentCityData: this.cleanCityData(currentCity) });
    });
  };

  cleanCityData = (data) => {
    let cleanedData = {
      name: !data.cityBasics.full_name
        ? "City Name Missing"
        : data.cityBasics.full_name,
      id: this.state.currentCityId,
      image: !data.cityImages.photos[0].image
        ? "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ncenet.com%2Fno-image-found&psig=AOvVaw30p53n61C-S7F5gmBwRYI4&ust=1650825656378000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCPjI1vzqqvcCFQAAAAAdAAAAABAt"
        : data.cityImages.photos[0].image,
      summary: data.cityScores.summary,
      overallScore: roundTo2(data.cityScores.teleport_city_score),
      isFavorited: this.checkFavorite(this.state.currentCityId)
    };
    return cleanedData;
  };

  changeId = (id) => {
    this.setState({ currentCityId: id });
    this.fetchMyStuff(id);
  };

  checkFavorite = (id) => {
    return favorites.includes(id) ? true : false
    

  }

  toggleFavorited = () => {
    const {favorites, currentCityData, currentCityId} = this.state
    let newFavorites
    if (favorites.includes(currentCityId)) {
      favorites.splice(favorites.indexOf(currentCityId), 1)
      newFavorites = favorites
    } else {
      newFavorites = [...favorites, currentCityId ]
    }
    this.setState(prevState => ({ 
      currentCityData: {...currentCityData, isFavorited : !prevState.currentCityData.isFavorited},
      favorites: newFavorites
    }));
    
  }

  render() {
    const {currentCityId, currentCityData, isLoading, } = this.state
    return (
      <div className="App">
        <Header
          id={currentCityId}
          changeId={this.changeId}
        />
        <Switch>
          {/* main dashboard */}
          <Route
            exact
            path="/"
            render={() => {
              return currentCityData && <DashBoard
                  key={currentCityId}
                  data={currentCityData}
                  isLoading={isLoading}
                  isFavorited={currentCityData.isFavorited}
                  toggleFavorited={this.toggleFavorited}
                />
              
            }}
          />
          {/* single city */}
          <Route
            exact
            path="/favorites"
            render={() => {
              return <Favorites favorites={this.favoriteCities} isLoading={isLoading} />;
            }}
          />

          {/* error page  */}
          <Route>
            <ErrorPage />
          </Route>
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;

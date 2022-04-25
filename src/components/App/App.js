import React, { Component } from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ErrorPage from "../ErrorPage/ErrorPage";
import DashBoard from "../DashBoard/DashBoard";
import Favorites from "../Favorites/Favorites";
import Loader from "../Loader/Loader";
import { nanoid } from "nanoid";
import {
  fetchCity,
  fetchDetails,
  fetchImages,
  fetchScores,
} from "../../apiCalls";
import { roundTo2 } from "../../utils";
import { favorites } from "../../data";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentCityId: "buffalo",
      favorites: ["buffalo", "denver", "san-diego"],
      favoritesData: [],
      currentCityData: null,
      allCityData: null,
      isLoading: true,
      isClicked: false,
      hasError: false,
      errorMsg: "Sorry, we are unable to get that!",
    };
  }

  componentDidMount = () => {
    this.fetchMyStuff(this.state.currentCityId);
    this.collectFavorites(this.state.favorites);
  };

  collectFavorites = (favArr) => {
    const newArr = favArr.reduce((arr, id) => {
      Promise.all([fetchCity(id), fetchImages(id)]).then((values) => {
        let currentCity = {
          id: id,
          name: values[0].full_name,
          image: values[1].photos[0].image.mobile,
          isFavorited: true,
        };
        arr.push(currentCity);
      });
      return arr;
    }, []);
    this.setState({
      favoritesData: newArr,
    });
  };

  fetchMyStuff = (id) => {
    Promise.all([
      fetchCity(id),
      fetchScores(id),
      fetchDetails(id),
      fetchImages(id),
    ]).then((values) => {
      let currentCity = {
        id: id,
        cityBasics: values[0],
        cityScores: values[1],
        cityDetails: values[2],
        cityImages: values[3],
      };
      this.setState({
        allCityData: currentCity,
        currentCityData: this.cleanCityData(currentCity),
        isLoading: false,
      });
    });
  };

  cleanCityData = (data) => {
    let cleanedData = {
      name: !data.cityBasics.full_name
        ? "City Name Missing"
        : data.cityBasics.full_name,
      id: !data.id ? nanoid() : data.id,
      image: !data.cityImages.photos[0].image
        ? "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ncenet.com%2Fno-image-found&psig=AOvVaw30p53n61C-S7F5gmBwRYI4&ust=1650825656378000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCPjI1vzqqvcCFQAAAAAdAAAAABAt"
        : data.cityImages.photos[0].image,
      summary: !data.cityScores.summary
        ? "<h3>Sorry, No Summary Available</h3>"
        : data.cityScores.summary,
      overallScore: !data.cityScores.teleport_city_score
        ? null
        : roundTo2(data.cityScores.teleport_city_score),
      lgtbqScore: !data.cityDetails.categories[12].data[10].float_value
        ? null
        : roundTo2(data.cityDetails.categories[12].data[10].float_value),
      minoritized: !data.cityDetails.categories[12].data[12].float_value
        ? null
        : roundTo2(data.cityDetails.categories[12].data[12].float_value),
      isFavorited: this.checkFavorite(data.id),
    };
    return cleanedData;
  };

  changeId = (id) => {
    this.fetchMyStuff(id);
  };

  checkFavorite = (id) => {
    return favorites.includes(id) ? true : false;
  };

  toggleFavorited = (id) => {
    const { favorites, currentCityData } = this.state;
    let newFavorites;
    if (favorites.includes(id)) {
      favorites.splice(favorites.indexOf(id), 1);
      newFavorites = favorites;
    } else {
      newFavorites = [...favorites, id];
    }
    this.setState((prevState) => ({
      currentCityData: {
        ...currentCityData,
        isFavorited: !prevState.currentCityData.isFavorited,
      },
      favorites: newFavorites,
    }));
    this.collectFavorites(newFavorites);
  };

  unFavorite = (id) => {
    const { favorites } = this.state;
    let newFavorites;
    favorites.splice(favorites.indexOf(id), 1);
    newFavorites = favorites;
    this.collectFavorites(newFavorites);
  };

  render() {
    const {
      currentCityId,
      currentCityData,
      isLoading,
      hasError,
      errorMsg,
      favoritesData,
    } = this.state;

    return (
      <div className="App">
        <Header id={currentCityId} changeId={this.changeId} />
        <Switch>
          {/* main dashboard */}
          <Route
            exact
            path="/"
            render={() => {
              return currentCityData ? (
                <DashBoard
                  key={currentCityId}
                  data={currentCityData}
                  isLoading={isLoading}
                  isFavorited={currentCityData.isFavorited}
                  toggleFavorited={this.toggleFavorited}
                  hasError={hasError}
                />
              ) : (
                <Loader />
              );
            }}
          />
          {/* single city */}
          <Route
            exact
            path="/favorites"
            render={() => {
              return favoritesData ? (
                <Favorites
                  isLoading={isLoading}
                  favoritesData={favoritesData}
                  fetchMyStuff={this.fetchMyStuff}
                  collectFavorites={this.collectFavorites}
                />
              ) : (
                <Loader />
              );
            }}
          />

          {/* error page  */}
          <Route>
            <ErrorPage error={errorMsg} />
          </Route>
          <Redirect to="/" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;

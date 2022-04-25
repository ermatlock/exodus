import React from "react";
import { Link } from "react-router-dom";
import "./Favorites.css";
import CityCard from "../CityCard/CityCard";

const Favorites = ({
  fetchMyStuff,
  toggleFavorited,
  isLoading,
  favoritesData,
  unFavorite
}) => {
  const favoriteCards = favoritesData.map((city) => {
    // console.log(city);
    return (
      
    
        <CityCard
          unFavorite={unFavorite}
          fetchMyStuff={fetchMyStuff}
          city={city}
          key={`card-${city.id}`}
          isFavorited={city.isFavorited}
        />
      
    );
  });

  return <div className="favorites-container">{favoriteCards}</div>;
};

export default Favorites;

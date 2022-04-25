import React from "react";
import "./Favorites.css";
import CityCard from "../CityCard/CityCard";

const Favorites = ({
  fetchMyStuff,
  favoritesData,
}) => {
  const favoriteCards = favoritesData.map((city) => {
    return (
        <CityCard
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

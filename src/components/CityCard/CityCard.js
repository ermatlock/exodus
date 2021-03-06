import React from "react";
import { Link } from "react-router-dom";
import "./CityCard.css";

const CityCard = ({
  fetchMyStuff,
  city,
}) => {
  return (
    <div className="city-card" id={`card-${city.id}`}>
      <img className="city-card-image" src={city.image} alt={city.id} />

      <h2 className="city-name">{city.name}</h2>
      <button className="card-button">
        <span className="true"></span>
      </button>

      <Link to="/">
        <button
          className="city-stats-button"
          onClick={() => fetchMyStuff(city.id)}
        >
          See City Stats
        </button>
      </Link>
    </div>
  );
};

export default CityCard;

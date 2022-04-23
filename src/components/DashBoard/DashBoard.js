import React, { useContext, useEffect } from "react";
import "./DashBoard.css";
import Loader from "../Loader/Loader";
import { nanoid } from "nanoid";
import FiCameraOff from 'react-icons/fa';
import CityCard from "../CityCard/CityCard"
import { cleanCityCardData } from "../../utils";

const DashBoard = ({citiesList}) => {
  const cityCards = citiesList.map(city => {
    let cleanedCity = cleanCityCardData(city)
    return (
      // <Link to={`/${city.id}`} key={city.id} style={{ textDecoration: 'none' }}>
      <CityCard
        id={cleanedCity.id}
        key={cleanedCity.id}
        image={cleanedCity.image}
        name={cleanedCity.name}
        lgtbqScore={cleanedCity.lgbtqScore}
        minoritizedScore={cleanedCity.minoritizedScore}
      />
    )  
      // </Link>
  })

  return (
    <section className="dash-board-container">
      {cityCards}
    </section>
  );
};

export default DashBoard;

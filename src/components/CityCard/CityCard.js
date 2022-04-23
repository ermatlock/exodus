import React from 'react'
import "./CityCard.css"

const CityCard = ({id, minoritizedScore, lgtbqScore, image, name}) => {
  return (
    <div className="city-card" id={id}>
        {/* <img src={image} alt={name}/> */}
        <h2>{name}</h2>
        <h3>LGBTQ Rating: {lgtbqScore}</h3>
        <h3>Minoritized Rating: {minoritizedScore}</h3>
    </div>
  )

}

export default CityCard
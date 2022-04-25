import React, { Component } from "react";
import "./DashBoard.css";
import {favorites} from "../../data"

const DashBoard = ({ data, isLoading, isFavorited, toggleFavorited }) => {

  return (
    <section className="dash-board-container">
      {data && (
        <>
          <h1>{data.name}</h1>
          <button className="favorites" onClick={toggleFavorited}><span className={`${isFavorited}`}></span></button>
          <p>Country:</p>
          <p>Overall Score: </p>
          <img src={data.image.web}></img>
          <div dangerouslySetInnerHTML={{ __html: data.summary }} />
            <iframe
              className="embed-detail"
              title="widget"
              src={`https://teleport.org/cities/${data.id}/widget/tolerance/?currency=USD&citySwitcher=false`}
            ></iframe>
        </>
      )}
    </section>
  );
};

export default DashBoard;

import React from "react";
import "./DashBoard.css";

const DashBoard = ({ data, isFavorited, toggleFavorited }) => {
  return (
    <section className="dash-board-container">
      {data && (
        <>
          <div className="top-bar">
            <h1>{data.name}</h1>
            <button
              className="favorites"
              onClick={() => toggleFavorited(data.id)}
            >
              <span className={`${isFavorited}`}></span>
            </button>
          </div>
          <h2>Overall City Score: {data.overallScore} (ranking) </h2>
          <h2>LGBTQ Score: {data.lgtbqScore} (out of 100) </h2>
          <h2>Minoritized score: {data.minoritized} (out of 1)</h2>

          <img src={data.image.web} alt={data.name} ></img>
          <div
            className="summary"
            dangerouslySetInnerHTML={{ __html: data.summary }}
          />
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

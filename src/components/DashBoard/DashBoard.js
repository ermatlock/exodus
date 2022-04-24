import React, { Component } from "react";
import "./DashBoard.css";
import Loader from "../Loader/Loader";
import { nanoid } from "nanoid";
const DashBoard = ({ data }) => {
  data && console.log(data);

  return (
    <section className="dash-board-container">
      {data && (
        <>
          <h1>{data.name}</h1>
          <p>Country:</p>
          <img src={data.image}></img>
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

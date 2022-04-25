import React from "react";
import "./Header.css";
import SearchBar from "../SearchBar/SearchBar";
import logo from "../../images/exodus.png"

import { Link, useLocation } from "react-router-dom";

const Header = ({ id, changeId }) => {
  const location = useLocation();

  return (
    <header>
    <Link to="/" >
      <img className="logo" src={logo} alt="exodus logo"/>

    </Link>
      <>
        {location.pathname === "/" ? (
          <SearchBar id={id} changeId={changeId} />
        ) : null}
      </>
      <>
        {location.pathname === "/" ? (
          <Link to="/favorites">
            <button className="favorites-switch">Go To Favorites</button>
          </Link>
        ) : (
          <Link to="/">
            <button className="favorites-switch"> Back To Main </button>
          </Link>
        )}
      </>
    </header>
  );
};

export default Header;

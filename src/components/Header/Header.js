import React from "react";
import "./Header.css";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";

const Header = ({ id, changeId }) => {
  

  return (
    <header>
      <h2>Exodus</h2>
      <SearchBar

      id={id}
      changeId={changeId}

      />
      <Link to="/favorites">
        <button>Go To Favorites</button>
      </Link>
    </header>
  );
};

export default Header;

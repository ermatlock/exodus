import React, { Component } from "react";
import "./SearchBar.css";
// import { DataContext } from "../../contexts/DataContext";

class SearchBar extends Component {
  constructor() {
    super()
    this.state = {
      citySearchName: "",
      cityId: ""
    }
  }
  

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  // clearInputs = () => {
  //   this.setState({ stance: "", name: "", obstacle: "", tutorial: "" });
  // };

  submitSearch = (event) => {
    event.preventDefault();
    const newTrick = {
      id: Date.now(),
      ...this.state,
    };
    this.props.addTrick(newTrick);
    this.clearInputs();
  };

 searchArtists = (event) => {
    event.preventDefault();
    data.setQuery(artistName);
    setArtistName("");
  };

  render() {
  return (
    <form onSubmit={(event) => searchArtists(event)}>
      <input
        className="search-bar"
        type="text"
        placeholder="search artist name"
        name="artist-name"
        value={artistName}
        required
        onChange={(event) => handleChange(event)}
      />
      <button className="button-search">
        <span class="text">Find Artist</span>
      </button>
    </form>
  );
  }
};

export default SearchBar;
import React, { Component } from "react";
import "./SearchBar.css";
import { cities } from "../../data";
class SearchBar extends Component {
  constructor(props) {
    super()
    this.state = {
      cityId: ""
    }
  }
  
  handleChange = (event) => {
    this.setState({ cityId: event.target.value });
    this.props.changeId(event.target.value)
  };


  render() {
  return (
    <form>
    <select value={this.state.cityId} onChange={(event) => this.handleChange(event)}>
      <option value="" disabled>--Please choose a City--</option>
      {Object.keys(cities).map((city) => <option value={cities[city]}>{city}</option>)}
    </select>
    </form>
  );
  }
};

export default SearchBar;
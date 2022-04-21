import React from "react";
import "./App.css";
import { DataContextProvider } from "../../contexts/DataContext";
import DashBoard from "../DashBoard/DashBoard"
import Loader from "../Loader/Loader"

const App = () => {
  return (
    <div className="App">
    <Loader />
    <DataContextProvider>
      <DashBoard />
    </DataContextProvider>
    </div>
  );
}

export default App;
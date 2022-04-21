import React from "react";
import "./App.css";
import { DataContextProvider } from "../../contexts/DataContext";
import DashBoard from "../DashBoard/DashBoard"
import Loader from "../Loader/Loader"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"


const App = () => {
  return (
    <div className="App">
    <Header />
    {/* <Loader /> */}
    <DataContextProvider>
      <DashBoard />
    </DataContextProvider>
    <Footer />
    </div>
  );
}

export default App;
import React from "react";
import "./App.css";
import { DataContextProvider } from "../../contexts/DataContext";

function App() {
  console.log(data)
  return (
    <div className="App">
      <h1>Hello, World!</h1>
    <DataContextProvider>
      
    </DataContextProvider>
    </div>
  );
}

export default App;
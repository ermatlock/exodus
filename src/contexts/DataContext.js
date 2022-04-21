import React, { useState, createContext, useEffect } from "react";
import { fetchData } from "../apiCalls";
// import Error from "../components/Error";

const DataContext = createContext();
const DataContextProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [searchQuery, setQuery] = useState("urban_areas/slug:san-francisco-bay-area/images/");
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(false);

  /*dynamic fetch query*/
  useEffect(() => {
    // setIsLoading(true);
    fetchData(searchQuery)
      .then((info) => {
       console.log(info)
      })
      .catch((err) => {
        console.log(err)
        // setError(true);
      })
      // .finally(() => setIsLoading(false));
  }, [searchQuery]);

  return (
    <DataContext.Provider value={{ data, setQuery, searchQuery}}>
      {data && children}
    </DataContext.Provider>
  );
};

export { DataContext, DataContextProvider };

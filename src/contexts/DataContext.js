// import React, { useState, createContext, useEffect } from "react";
// import axios from "axios"

// const DataContext = createContext();
// const DataContextProvider = ({ children }) => {
//   const [data, setData] = useState(null);
//   const [searchQuery, setSearchQuery] = useState(
//     "buffalo"
//   );
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(false);


  /*axios fetch query*/
//   useEffect(() => {

//   const fetchData = async (searchQuery) => {
//     const uaUrl = `https://api.teleport.org/api/urban_areas/slug:${searchQuery}/`
//     const uaScoresUrl = `https://api.teleport.org/api/urban_areas/slug:${searchQuery}/scores`
//     const uaDetailsUrl = `https://api.teleport.org/api/urban_areas/slug:${searchQuery}/details`
//     const uaImagesUrl = `https://api.teleport.org/api/urban_areas/slug:${searchQuery}/images`
//     const ua = await axios.get(uaUrl)
//     const uaScores = await axios.get(uaScoresUrl)
//     const uaDetails = await axios.get(uaDetailsUrl)
//     const uaImages = await axios.get(uaImagesUrl)
//     setData({
//       cityBasics: ua.data,
//       uaScores: uaScores.data, 
//       uaDetails: uaDetails.data.categories, 
//       uaImages: uaImages.data.photos[0].image
//     })  
    
//   }  
//   fetchData(searchQuery)
// }, [searchQuery])

  /*dynamic fetch query*/
  // useEffect(() => {
  //   setIsLoading(true);
  //   fetchData(searchQuery)
  //     .then((info) => {
  //       console.log(info);
  //       setData({
  //   cityBasics: ua.data,
  //   uaScores: uaScores.data, 
  //   uaDetails: uaDetails.data.categories, 
  //   uaImages: uaImages.data.photos[0].image
  // })
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       setError(true);
  //     })
  //     .finally(() => setIsLoading(false));
  // }, [searchQuery]);

//   return (
//     <DataContext.Provider
//       value={{
//         data,
//         setData,
//         searchQuery,
//         setSearchQuery,
//         error,
//         setError,
//         isLoading,
//         setIsLoading,
//       }}
//     >
//       {data && children}
//     </DataContext.Provider>
//   );
// };

// export { DataContext, DataContextProvider };

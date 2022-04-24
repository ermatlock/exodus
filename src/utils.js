// import { nanoid } from "nanoid";

// export const getRandom = (array) => {
//   return array[Math.floor(Math.random() * array.length)];
// };

// const roundTo2 = (num) => {
//   return +num.toFixed(2);
// }

// export const cleanCityData = (data) => {
//   const cleanedCity = {
//     name: !data.cityBasics.full_name
//       ? "City Name Missing"
//       : data.cityBasics.full_name,
//     id: !data.id ? nanoid() : data.id,
//     image: !data.cityImages.photos[0].image.mobile ? "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ncenet.com%2Fno-image-found&psig=AOvVaw30p53n61C-S7F5gmBwRYI4&ust=1650825656378000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCPjI1vzqqvcCFQAAAAAdAAAAABAt" : data.cityImages.photos[0].image.web,
//     summary: data.cityScores.summary,
//   };
  
//   console.log(data)
//   return cleanedCity
// };



// import { nanoid } from "nanoid";

export const getRandom = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

export const roundTo2 = (num) => {
  return +num.toFixed(2);
}

// export const cleanCityData = (data, id) => {
//   let cleanedData = {
//     name: !data.cityBasics.full_name
//       ? "City Name Missing"
//       : data.cityBasics.full_name,
//     id: this.state.currentCityId,
//     image: !data.cityImages.photos[0].image
//       ? "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ncenet.com%2Fno-image-found&psig=AOvVaw30p53n61C-S7F5gmBwRYI4&ust=1650825656378000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCPjI1vzqqvcCFQAAAAAdAAAAABAt"
//       : data.cityImages.photos[0].image,
//     summary: data.cityScores.summary,
//     overallScore: roundTo2(data.cityScores.teleport_city_score),
//     lgtbqScore: roundTo2(data.cityScores.teleport_city_score),
//     isFavorited: this.checkFavorite(this.state.currentCityId),
//   };
//   return cleanedData;
// };



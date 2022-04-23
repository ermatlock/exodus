import { nanoid } from "nanoid";

export const getRandom = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

const roundTo2 = (num) => {
  return +num.toFixed(2);
}

export const cleanCityCardData = (cityData) => {
    const cleanedCity = {
      name: !cityData.cityBasics.full_name
        ? "City Name Missing"
        : cityData.cityBasics.full_name,
      lgbtqScore: !cityData.cityDetails.categories[12].data[10].float_value
        ? "Score Missing"
        : roundTo2(cityData.cityDetails.categories[12].data[10].float_value),
      minoritizedScore: !cityData.cityDetails.categories[12].data[12].float_value
      ? "Score Missing"
      : roundTo2(cityData.cityDetails.categories[12].data[12].float_value),   
      id: !cityData.id ? nanoid() : cityData.id,
      image: !cityData.cityImages.photos[0].image.mobile ? "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ncenet.com%2Fno-image-found&psig=AOvVaw30p53n61C-S7F5gmBwRYI4&ust=1650825656378000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCPjI1vzqqvcCFQAAAAAdAAAAABAt" : cityData.cityImages.photos[0].image.mobile
    };
    return cleanedCity
  };



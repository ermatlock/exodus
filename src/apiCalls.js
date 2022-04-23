export const fetchCity = async (query) => {
  try {
    const response = await fetch(`https://api.teleport.org/api/urban_areas/slug:${query}/`);
    if (!response.ok) {
      throw new Error(`${response.error}, Sorry, I was unable to get that!`);
    }
    let data = await response.json();
    return data;
  } catch (e) {
    console.log(e.message);
  }
};

export const fetchScores = async (query) => {
  try {
    let response = await fetch(`https://api.teleport.org/api/urban_areas/slug:${query}/scores`);
    if (!response.ok) {
      throw new Error(`${response.error}, Sorry, I was unable to get that!`);
    }
    let data = await response.json();
    return data;
  } catch (e) {
    console.log(e.message);
  }
};

export const fetchDetails = async (query) => {
  try {
    let response = await fetch(`https://api.teleport.org/api/urban_areas/slug:${query}/details`);
    if (!response.ok) {
      throw new Error(`${response.error}, Sorry, I was unable to get that!`);
    }
    let data = await response.json();
    return data;
  } catch (e) {
    console.log(e.message);
  }
};

export const fetchImages = async (query) => {
  try {
    let response = await fetch(`https://api.teleport.org/api/urban_areas/slug:${query}/images`);
    if (!response.ok) {
      throw new Error(`${response.error}, Sorry, I was unable to get that!`);
    }
    let data = await response.json();
    return data;
  } catch (e) {
    console.log(e.message);
  }
};




// const uaUrl = `https://api.teleport.org/api/urban_areas/slug:${query}/`
//     const uaScoresUrl = `https://api.teleport.org/api/urban_areas/slug:${query}/scores`
//     const uaDetailsUrl = `https://api.teleport.org/api/urban_areas/slug:${query}/details`
//     const uaImagesUrl = `https://api.teleport.org/api/urban_areas/slug:${query}/images`
//     const ua = await axios.get(uaUrl)
//     const uaScores = await axios.get(uaScoresUrl)
//     const uaDetails = await axios.get(uaDetailsUrl)
//     const uaImages = await axios.get(uaImagesUrl)
//     setData({
//       cityBasics: ua.data,
//       uaScores: uaScores.data, 
//       uaDetails: uaDetails.data.categories, 
//       uaImages: uaImages.data.photos[0].image
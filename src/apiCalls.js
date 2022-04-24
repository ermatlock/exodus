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

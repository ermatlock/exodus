export const fetchData = async (query) => {
  try {
    let response = await fetch(`https://api.teleport.org/api/${query}`);
    if (!response.ok) {
      throw new Error(`${response.error}, Sorry, I was unable to get that!`);
    }
    let data = await response.json();
    return data;
  } catch (e) {
    console.log(e.message);
  }
};

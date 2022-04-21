export const fetchData = async (query) => {
  return fetch(`https://api.teleport.org/api/${query}`).then(
    (response) => {
      if (!response.ok) {
        throw new Error("Error getting");
      } else {
        return response.json();
      }
    }
  );
};
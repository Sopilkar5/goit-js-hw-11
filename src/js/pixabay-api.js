import axios from "axios";

const API_KEY = "48661661-399e17c2888aa32e2cfb6a652"

export const fetchImages = (query) => {
  return axios.get("https://pixabay.com/api/", {
    params: {
      key: API_KEY,
      q: query,
      image_type: "photo",
      orientation: "horizontal",
      safesearch: true,
    },
  })
  .then(response => {
    return response.data.hits;
  })
  .catch(error => {
    console.error("Error fetching images: ", error);
    throw new Error("Unable to fetch images.");
  });
};
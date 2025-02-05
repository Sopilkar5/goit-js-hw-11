import { fetchImages } from './js/pixabay-api.js';
import { renderImages, showErrorMessage } from './js/render-functions.js';
import "izitoast/dist/css/iziToast.min.css";

const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const searchButton = document.querySelector("button");
const gallery = document.getElementById("gallery");
const loader = document.querySelector(".loader");

searchForm.classList.add("search-form");
searchInput.classList.add("search-input");
searchButton.classList.add("search-button");
gallery.classList.add("gallery");

searchForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const query = searchInput.value.trim();
  if (!query) {
    showErrorMessage("Please enter a search term.");
    return;
  }

showLoadingIndicator();
    
  try {
    const images = await fetchImages(query);
    renderImages(images);
  } catch (error) {
    showErrorMessage("Failed to fetch images. Please try again later.");
  } finally {
    hideLoadingIndicator();
  }
  searchInput.value = "";
});
const showLoadingIndicator = () => {
  loader.style.display = "block"; 
};

const hideLoadingIndicator = () => {
  loader.style.display = "none"; 
};
/* eslint-disable import/extensions */
import $ from 'jquery';
import { API_ENDPOINT } from '../data/movies';
import '../component/movie-item.js';

function Main() {
  const listMovieElement = document.querySelector('#movieList');
  const navbarElement = document.querySelector('nav-bar');

  const renderMovies = (movies) => {
    listMovieElement.innerHTML = '';

    movies.forEach((movie) => {
      const movieItemElement = document.createElement('movie-item');
      movieItemElement.movie = movie;
      listMovieElement.appendChild(movieItemElement);
    });
  };

  const showResponseMessage = (message = 'Check your internet connection') => {
    alert(message);
  };

  const fetchAPI = async (APIendpoint) => {
    try {
      const response = await fetch(APIendpoint, {
        method: 'GET',
      });
      const responseJson = await response.json();
      if (responseJson.error) {
        showResponseMessage(responseJson.message);
      } else {
        renderMovies(responseJson.results);
      }
    } catch (error) {
      showResponseMessage(error);
    }
  };

  const fetchNowPLaying = async () => fetchAPI(API_ENDPOINT.NOW_PLAYING);
  const fetchUpcoming = async () => fetchAPI(API_ENDPOINT.UPCOMING);
  const fetchPopular = async () => fetchAPI(API_ENDPOINT.POPULAR);

  fetchNowPLaying();
  const navbarOnclick = (fetch, event) => {
    fetch();
    $('.nav-link').each((index, navLink) => {
      navLink.classList.remove('active');
    });
    event.target.classList.add('active');
  };

  navbarElement.clickEventNowPlaying = (event) => navbarOnclick(fetchNowPLaying, event);
  navbarElement.clickEventUpcoming = (event) => navbarOnclick(fetchUpcoming, event);
  navbarElement.clickEventPopular = (event) => navbarOnclick(fetchPopular, event);
}
export default Main();

/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */
import 'regenerator-runtime';
import { CONFIG, API_ENDPOINT } from '../data/movies';

class MovieItem extends HTMLElement {
  set movie(movie) {
    this._movie = movie;
    this.render(movie);
  }

  async getGenres() {
    try {
      const response = await fetch(
        `${API_ENDPOINT.GENRES}`,
        {
          method: 'GET',
        },
      );
      const responseJson = await response.json();
      if (responseJson.error) {
        // showResponseMessage(responseJson.message);
      } else {
        // renderAllMovie(responseJson.results);
        return responseJson.genres;
      }
    } catch (error) {
      return null;
    }
    return null;
  }

  render(movie) {
    this.innerHTML += `       
        <img
        style='height: 12.2rem'
        src='${CONFIG.BASE_IMAGE_URL}/${movie.backdrop_path}'
        class='card-img-top'
        alt='movie-backdrop.jpg'
        />
        <div class='card-body'>
        <h5 class='movie__title mb-2'>${movie.original_title}</h5>
        <h6 class='movie__rating mb-4'>
            ${movie.vote_average * 10}% cocok
        </h6>
        <div class='movie__genres d-flex'>
            <ul class='movie__genre-container a d-flex flex-wrap mb-0 ps-0' style='list-style-position: inside;'>
                <p class='movie__genre1 me-3'></p>
            </ul>
        </div>
        </div>`;

    const isAdultElemet = this.querySelector('.movie__rating');
    if (movie.adult) {
      isAdultElemet.innerHTML += '<span class="adults__tag"> 18+ </span>';
    }

    const genreList = this.querySelector('.movie__genre-container');
    const firstGenre = this.querySelector('.movie__genre1');
    const genres = async () => {
      const response = await this.getGenres();

      movie.genre_ids.forEach((genreId, index) => {
        const foundGenre = response.find((genre) => genre.id === genreId);
        if (index === 0) {
          firstGenre.innerHTML = `${foundGenre.name}`;
        } else {
          genreList.innerHTML += `<li class="movie__genre me-3">${foundGenre.name}</li>`;
        }
      });
    };

    genres();
  }
}

customElements.define('movie-item', MovieItem);

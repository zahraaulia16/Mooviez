/* eslint-disable no-underscore-dangle */
import $ from 'jquery';

class NavBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set clickEventNowPlaying(event) {
    this._clickEventNowPlaying = event;
    this.render();
  }

  set clickEventUpcoming(event) {
    this._clickEventUpcoming = event;
    this.render();
  }

  set clickEventPopular(event) {
    this._clickEventPopular = event;
    this.render();
  }

  render() {
    this.innerHTML = `
      <nav class="navbar navbar-expand-lg navbar-dark">
        <div class="container-fluid px-5">
          <a class="navbar-brand" href="#">Mooviez</a>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a class="nav-link active" id="nowPlaying" aria-current="page" href="#"
                  >Now Playing</a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link" id="upcoming" href="#">Upcoming</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" id="popular" href="#">Popular</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>`;

    $('#nowPlaying').click(this._clickEventNowPlaying);
    $('#upcoming').click(this._clickEventUpcoming);
    $('#popular').click(this._clickEventPopular);
  }
}

customElements.define('nav-bar', NavBar);

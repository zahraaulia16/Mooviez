const CONFIG = {
  KEY: '8e96510e5dea91cd8d33320cafcd754c',
  BASE_URL: 'https://api.themoviedb.org/3/',
  BASE_IMAGE_URL: 'https://image.tmdb.org/t/p/w500/',
  DEFAULT_LANGUAGE: 'en-us',
};

// api helpers
const API_ENDPOINT = {
  NOW_PLAYING: `${CONFIG.BASE_URL}movie/now_playing?api_key=${CONFIG.KEY}&language=${CONFIG.DEFAULT_LANGUAGE}`,
  UPCOMING: `${CONFIG.BASE_URL}movie/upcoming?api_key=${CONFIG.KEY}&language=${CONFIG.DEFAULT_LANGUAGE}`,
  POPULAR: `${CONFIG.BASE_URL}discover/movie?api_key=${CONFIG.KEY}&language=${CONFIG.DEFAULT_LANGUAGE}&sort_by=popularity.desc`,
};

export { CONFIG, API_ENDPOINT };

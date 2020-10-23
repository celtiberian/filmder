export const endpoints = {
  getMovieByID: (movieID) => `/3/movie/${movieID}`,
  getSuggestionsByTitle: (title) => `/3/search/movie?query=${title}`,
}

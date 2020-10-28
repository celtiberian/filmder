export const commonAPIEndpoints = {
  getMovieByID: (movieID) => `/3/movie/${movieID}`,
  getSuggestionsByTitle: (title) => `/3/search/movie?query=${title}`,
}

export const pioAPIEndpoints = {
  getRecommendationByUserId: 'queries.json',
}
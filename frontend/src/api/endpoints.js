export const commonAPIEndpoints = {
  getMovieByID: (movieID) => `/3/movie/${movieID}`,
  getMovieByExternalID: (externalId) => `/3/find/${externalId}?external_source=imdb_id`,
  getSuggestionsByTitle: (title) => `/3/search/movie?query=${title}`,
}
export const pioAPIEndpoints = {
  getRecommendationByUserId: 'queries.json',
  sendLikedMovie: (title) => `/3/search/movie?query=${title}`,
}

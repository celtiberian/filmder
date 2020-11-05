import { PIO_API_KEY } from "./constants"

export const commonAPIEndpoints = {
  getMovieByID: (movieID) => `/3/movie/${movieID}`,
  getMovieByExternalID: (externalId) => `/3/find/${externalId}?external_source=imdb_id`,
  getSuggestionsByTitle: (title) => `/3/search/movie?query=${title}`,
}
export const pioAPIEndpoints = {
  getRecommendationByUserId: 'queries.json',
  sendMovieEvent: `events.json?accessKey=${PIO_API_KEY}`,
  getUserEvent: (userId) => `events.json?entityId=${userId}&accessKey=${PIO_API_KEY}`
}

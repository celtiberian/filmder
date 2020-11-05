import { commonAPIEndpoints, pioAPIEndpoints } from './endpoints'
import API from './commonAPI'
import ENGINE from './pioAPI'

const getMovieByID = async (movieID) => {
  const res = await API.get(commonAPIEndpoints.getMovieByID(movieID))
  if (res.error) throw res.error
  return res.data
}

const getMovieByExternalID = async (movieID) => {
  const res = await API.get(commonAPIEndpoints.getMovieByExternalID(movieID))
  if (res.error) throw res.error
  return res.data.movie_results[0]
}

const getSuggestionByTitle = async (title) => {
  const res = await API.get(commonAPIEndpoints.getSuggestionsByTitle(title))
  if (res.error) throw res.error
  return res.data
}

const getRecommendationsByUserId = async (user, num = 10, blackList = []) => {
  const res = await ENGINE.post(pioAPIEndpoints.getRecommendationByUserId, { user, num, blackList })
  if (res.error) throw res.error
  return res.data
}

const sendLikedMovie = async (userId, movieID) => {
  const res = await ENGINE.post(pioAPIEndpoints.sendMovieEvent, {
    event : "buy",
    entityType : "user",
    entityId : userId,
    targetEntityType : "item",
    targetEntityId : movieID,
  })
}

const sendDislikedMovie = async (userId, movieID) => {
    const res = await ENGINE.post(pioAPIEndpoints.sendMovieEvent, {
      event : "dislike",
      entityType : "user",
      entityId : userId,
      targetEntityType : "item",
      targetEntityId : movieID,
    })
  }

const getUserLikedMovies = async (userId) => {
  const res = await ENGINE.get(pioAPIEndpoints.getUserEvent(userId))
  return res.data
}


export {
  getMovieByID,
  getSuggestionByTitle,
  getRecommendationsByUserId,
  getMovieByExternalID,
  sendLikedMovie,
  sendDislikedMovie,
  getUserLikedMovies,
}

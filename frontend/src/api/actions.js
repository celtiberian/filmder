import { commonAPIEndpoints, pioAPIEndpoints } from './endpoints'
import API from './commonAPI'
import ENGINE from './pioAPI'

const getMovieByID = async (movieID) => {
  const res = await API.get(commonAPIEndpoints.getMovieByID(movieID))
  if (res.error) throw res.error
  return res.data
}

const getSuggestionByTitle = async (title) => {
  const res = await API.get(commonAPIEndpoints.getSuggestionsByTitle(title))
  if (res.error) throw res.error
  return res.data
}

const getRecommendationsByUserId = async (user, num = 10) => {
  const res = await ENGINE.post(pioAPIEndpoints.getRecommendationByUserId, { user, num })
  if (res.error) throw res.error
  return res.data
}

export { getMovieByID, getSuggestionByTitle, getRecommendationsByUserId }

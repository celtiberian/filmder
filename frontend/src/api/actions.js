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

const getRecommendationsByUserId = async (user, num = 10) => {
  //const res = await ENGINE.post(pioAPIEndpoints.getRecommendationByUserId, { user, num })
  const res = {
    data: {
      itemScores: [
        {
          item: 'tt0388789',
          score: 7.454662480280341,
        },
        {
          item: 'tt0109759',
          score: 6.96929279189283,
        },
        {
          item: 'tt4154756',
          score: 6.91311652417214,
        },
        {
          item: 'tt8359848',
          score: 6.906851060230449,
        },
        {
          item: 'tt0138946',
          score: 6.635201301256078,
        },
        {
          item: 'tt0298845',
          score: 6.392319910062136,
        },
        {
          item: 'tt0185906',
          score: 6.352496814918274,
        },
        {
          item: 'tt0113851',
          score: 6.304700340561025,
        },
        {
          item: 'tt0074156',
          score: 6.240380987212674,
        },
        {
          item: 'tt0120866',
          score: 6.191439195243476,
        },
      ],
    },
  }
  if (res.error) throw res.error
  return res.data
}

const sendLikedMovie = async (userId, movieID) => {
  // const res = await API.post(pioAPIEndpoints.sendLikedMovie(userId, movieID))
  // if (res.error) throw res.error
  // return res.data
}

export {
  getMovieByID,
  getSuggestionByTitle,
  getRecommendationsByUserId,
  getMovieByExternalID,
  sendLikedMovie,
}

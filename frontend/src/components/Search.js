import React, { useEffect, useState } from 'react'
import ReactSearchBox from 'react-search-box'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFire } from '@fortawesome/free-solid-svg-icons'
import data from '../data/dataSearch.js'
import Deck from './Deck'
import '../styles/Search.css'
import { WelcomeView } from './WelcomeView.js'
import {
  getMovieByID,
  getSuggestionByTitle,
  getRecommendationsByUserId,
  getMovieByExternalID,
  sendLikedMovie,
  sendDislikedMovie,
  getUserLikedMovies,
} from '../api/actions.js'
import { useCoreContext } from '../contexts/index.js'

const Search = () => {
  const [globalState] = useCoreContext()
  const [movies, setMovies] = useState([])
  const [movieIDs, setMovieIDs] = useState([])
  const [currentPage, setCurrentPage] = useState(0)
  // TODO add loading animation
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  const [suggestions, setSuggestions] = useState([])

  console.log(globalState)

  if (!globalState.username) {
    return <WelcomeView />
  }

  const handleSearchChange = async (text) => {
    if (text.length > 2) {
      const { results } = await getSuggestionByTitle(text)
      const parsedResults = results.map((m) => {
        return {
          key: m.id,
          value: m.title,
        }
      })
      setSuggestions(parsedResults)
    }
  }

  const getRecommendations = async () => {
    //const movieResult = await getMovieByID(movie.key)
    const res = await getUserLikedMovies(globalState.username)
    console.log(res)
    const { itemScores: recommendations } = await getRecommendationsByUserId(
      globalState.username,
      150,
      res.map(val => val.targetEntityId)
    )
    const imdbIdList = recommendations.map((rec) => rec.item)
    const movies = await Promise.allSettled(
      imdbIdList.map((id) => getMovieByExternalID(id))
    )
    const filteredMovies = movies
      .filter((i) => i.status === 'fulfilled')
      .map((i) => i.value)

    const mergedMovieList = filteredMovies.map((e, i) => ({
      ...e,
      imdbId: imdbIdList[i],
    }))

    return mergedMovieList.filter((m) => m.id)
  }

  const handleSelect = async (movie) => {
    setIsLoading(true)

    const movieData = await getMovieByID(movie.key)
    
    console.log(movieData.imdb_id)
    await sendLikedMovie(globalState.username, movieData.imdb_id)

    const recommendedMovies = await getRecommendations()
    setCurrentPage(0)
    setMovies(recommendedMovies)
    setIsLoading(false)
  }
  const addLikedMovie = async (movieId) => {
    await sendLikedMovie(globalState.username, movieId)
  }

  const addDislikedMovie = async (movieId) => {
    await sendDislikedMovie(globalState.username, movieId)
  }

  return (
    <div>
      <div className="Search">
        <div className="search-wrapper">
          <button className="button-search">
            <FontAwesomeIcon icon={faFire} />
          </button>
          <div className="search-box">
            <ReactSearchBox
              placeholder="Search your movie ♥"
              data={suggestions}
              callback={(record) => console.log('record')}
              onChange={handleSearchChange}
              onSelect={handleSelect}
            />
          </div>
        </div>
      </div>
      <div className="Deck-Searched">
        {movies.length > 0 ? (
          <Deck
            data={movies.slice(10*currentPage,10*(currentPage+1))}
            likedAction={addLikedMovie}
            dislikedAction={addDislikedMovie}
            lastCardAction={() => setCurrentPage(val => val + 1)}
          />
        ) : (
          <p>
            {'Search the first movie to start recommending new ones'}
          </p>
        )}
      </div>
    </div>
  )
}

export default Search

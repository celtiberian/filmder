import React, { useEffect, useState } from 'react'
import ReactSearchBox from 'react-search-box'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFire } from '@fortawesome/free-solid-svg-icons'
import data from '../data/dataSearch.js'
import Deck from './Deck'
import '../styles/Search.css'
import { WelcomeView } from './WelcomeView.js'
import { getMovieByID, getSuggestionByTitle } from '../api/actions.js'
import { useCoreContext } from '../contexts/index.js'

const Search = () => {
  const [globalState] = useCoreContext()
  const [showDeck, setShowDeck] = useState(false)
  const [movies, setMovies] = useState([])
  const [movieIDs, setMovieIDs] = useState([550, 220])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  const [suggestions, setSuggestions] = useState([])

  useEffect(() => {
    const fetchData = async (movieIDs) => {
      setIsError(false)
      setIsLoading(true)

      try {
        const moviesListPromises = movieIDs.map(async (movieID) => getMovieByID(movieID))
        const moviesList = await Promise.all(moviesListPromises)
        setMovies(moviesList)
      } catch (error) {
        setIsError(true)
      }

      setIsLoading(false)
    }

    fetchData(movieIDs)
  }, [movieIDs])

  console.log(globalState)

  if (!globalState.username) {
    return <WelcomeView />
  }

  const onClick = () => setShowDeck(true)

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

  const handleSelect = async (movie) => {
    const movieResult = await getMovieByID(movie.key)
    console.log(movieResult)
    setMovies([movieResult])
  }

  return (
    <div>
      <div className="Search">
        <div className="search-wrapper">
          <button className="button-search" onClick={onClick}>
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
      <div className="Deck-Searched">{showDeck ? <Deck /> : null}</div>
    </div>
  )
}

export default Search

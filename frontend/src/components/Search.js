import React, { useState } from 'react'
import ReactSearchBox from 'react-search-box'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFire } from '@fortawesome/free-solid-svg-icons'
import data from '../data/dataSearch.js'
import Deck from './Deck'
import '../styles/Search.css'
//import useKeyPress from '../utils/useKeyPress'

const Search = () => {
  const [showDeck, setShowDeck] = useState(false)
  /* TODO: Como le paso esto al componente de input ReactSearchBox? Quiero que al darle a enter haga la busqueda
  const enterPress = useKeyPress('h')
  */

  const onClick = () => setShowDeck(true)

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
              data={data}
              callback={(record) => console.log('record')}
            />
          </div>
        </div>
      </div>
      <div className="Deck-Searched">{showDeck ? <Deck /> : null}</div>
    </div>
  )
}

export default Search

import React, { useState } from 'react'
import ReactSearchBox from 'react-search-box'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFire } from '@fortawesome/free-solid-svg-icons'
import data from '../data/dataSearch.js'
import Deck from './Deck'
import '../styles/Search.css'
import useKeyPress from '../utils/useKeyPress'
import Animate from 'animate.css-react'
import 'animate.css/animate.css'

const Search = () => {
  const [showDeck, setShowDeck] = useState(false)
  /*Como le paso esto al componente de input ReactSearchBox? Quiero que al darle a enter haga la busqueda*/
  const enterPress = useKeyPress('h')

  const onClick = () => setShowDeck(true)

  /*No tengo forma de arrancar la animacion, que me falta?*/
  return (
    <div>
      <Animate
        enter="jackInTheBox"
        appear="jackInTheBox"
        durationAppear={2000}
        durationEnter={2000}
        component="div"
      >
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
      </Animate>
      <div className="Deck-Searched">{showDeck ? <Deck /> : null}</div>
    </div>
  )
}

export default Search

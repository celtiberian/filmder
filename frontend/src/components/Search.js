import React, { useEffect, useState } from "react";
import ReactSearchBox from "react-search-box";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire } from "@fortawesome/free-solid-svg-icons";
import data from "../data/dataSearch.js";
import Deck from "./Deck";
import "../styles/Search.css";
import useKeyPress from "../utils/useKeyPress";
import Animate from "animate.css-react";
import "animate.css/animate.css";
import { getMovieByID } from "../api/actions.js";

const Search = () => {
  const [showDeck, setShowDeck] = useState(false);
  const [movies, setMovies] = useState([]);
  const [movieIDs, setMovieIDs] = useState([550, 220])
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async (movieIDs) => {
      setIsError(false);
      setIsLoading(true);
 
      try {
        console.log(movieIDs)
        const moviesListPromises = movieIDs.map(async (movieID) => getMovieByID(movieID))
        const moviesList = await Promise.all(moviesListPromises)
        setMovies(moviesList);
      } catch (error) {
        setIsError(true);
      }
 
      setIsLoading(false);
    };
 
    fetchData(movieIDs);
  }, []);

  /*Como le paso esto al componente de input ReactSearchBox? Quiero que al darle a enter haga la busqueda*/
  const enterPress = useKeyPress("h");

  const onClick = () => setShowDeck(true);

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
                callback={(record) => console.log("record")}
              />
            </div>
          </div>
        </div>
      </Animate>
      <div className="Deck-Searched">{showDeck ? <Deck /> : null}</div>
    </div>
  );
};

export default Search;

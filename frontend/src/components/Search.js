import React, { useState } from "react";
import ReactSearchBox from "react-search-box";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import data from "../data/dataSearch.js";
import Deck from "./Deck";
import "../styles/Search.css";

const Search = () => {
  const [showDeck, setShowDeck] = useState(false);

  const onClick = () => setShowDeck(true);

  return (
    <div>
      <div className="Search">
        <div className="search-box">
          <ReactSearchBox
            placeholder="Placeholder"
            value="Doe"
            data={data}
            callback={(record) => console.log(record)}
          />
        </div>
        <button className="button-search" onClick={onClick}>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
      <div className="Deck-Searched">{showDeck ? <Deck /> : null}</div>
    </div>
  );
};

export default Search;

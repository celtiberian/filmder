import React from 'react'
import { string, number, array } from 'prop-types'
import { animated, interpolate } from 'react-spring/hooks'
import Carousel from 'nuka-carousel'

const IMAGE_BASE_URL = "http://image.tmdb.org/t/p/original/"

const Card = ({ i, x, y, rot, scale, bind, data }) => {

  const { title, release_date: releaseDate, production_countries: countries, overview, poster_path } = data[i]
  const countriesParsed = countries.map(c => c.name).join(", ")
  const pic = [IMAGE_BASE_URL + poster_path]
  const year = releaseDate.slice(0,4)

  return (
    <animated.div
      key={i}
      style={{
        transform: interpolate([x, y], (x, y) => `translate3d(${x}px,${y}px,0)`),
      }}
    >
      <animated.div {...bind(i)}>
        <div className="card">
          <img src={pic} alt="poster" />
          <div className="row">
            <h2>{title}</h2>
            <h2>{year}</h2>
          </div>
          <h5>{countriesParsed}</h5>
          <h5>{overview}</h5>
        </div>
      </animated.div>
    </animated.div>
  )
}

Card.propTypes = {
  name: string,
  age: number,
  distance: string,
  text: string,
  pics: array,
}

export default Card

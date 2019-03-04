import React, { Component } from 'react'

class MovieDetails extends Component {
  render() {
    return (
      <figure>
        <h4>{this.props.title}</h4>
        <h5>{this.props.releaseDate}</h5>
        <h3>{this.props.genre}</h3>
        <img
          className="movie-poster"
          src={`https://image.tmdb.org/t/p/original${this.props.poster}`}
          alt=""
        />
        <figcaption>{this.props.description}</figcaption>
      </figure>
    )
  }
}

export default MovieDetails

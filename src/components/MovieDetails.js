import React, { Component } from 'react'

class MovieDetails extends Component {
  render() {
    return (
      <figure>
        <h4>{this.props.title}</h4>
        <h5>Released On: {this.props.releaseDate}</h5>
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

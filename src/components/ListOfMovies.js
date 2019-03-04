import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class ListOfMovies extends Component {
  render() {
    return (
      <ul className="movies-showing">
        {this.props.movies.map((movie, index) => {
          return (
            <Link key={index} to={'/Movie/' + this.props.movies[index].id}>
              <li>{movie.title}</li>
            </Link>
          )
        })}
      </ul>
    )
  }
}

export default ListOfMovies

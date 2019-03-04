import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class MovieList extends Component {
  state = {
    apiKey: '8d06228140322691066ef39ba52dfbb4',
    movies: [],
    featuredMovie: {}
  }

  componentDidMount() {
    axios
      .get(
        'https://api.themoviedb.org/3/movie/now_playing?api_key=' +
          this.state.apiKey +
          '&language=en-US&page=1'
      )
      .then(resp => {
        const featuredMovie =
          resp.data.results[
            Math.floor(Math.random() * resp.data.results.length)
          ]
        this.setState({
          featuredMovie,
          movies: resp.data.results
        })
      })
  }

  render() {
    return (
      <>
        <header className="now-showing-banner">
          <h1>Now Showing</h1>
        </header>
        <section className="highlighted-movie">
          <h2>Featuring: </h2>
          <p>{this.state.featuredMovie.title}</p>
        </section>
        <ul className="movies-showing">
          {this.state.movies.map((movie, index) => {
            return (
              <Link key={index} to={'/Movie/' + this.state.movies[index].id}>
                <li>{movie.title}</li>
              </Link>
            )
          })}
        </ul>
      </>
    )
  }
}

export default MovieList

import React, { Component } from 'react'
import MovieList from '../MovieList'
import axios from 'axios'

class MovieList extends Component {
  state = {
    apiKey: '8d06228140322691066ef39ba52dfbb4',
    movies: []
  }

  componentDidMount() {
    axios
      .get(
        'https://api.themoviedb.org/3/movie/now_playing?api_key=' +
          this.state.apiKey +
          '&language=en-US&page=1'
      )
      .then(resp => {
        this.setState({
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
          <p>
            {/* {
              this.state.movies[
                Math.floor(Math.random() * this.state.movies.length)
              ].title
            } */}
            featured movie
          </p>
        </section>
        <ul className="movies-showing">
          {this.state.movies.map((movie, index) => {
            return <li key={index}>{movie.title}</li>
          })}
        </ul>
      </>
    )
  }
}

export default MovieList

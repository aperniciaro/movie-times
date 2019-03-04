import React, { Component } from 'react'
import axios from 'axios'
import Header from '../components/Header'
import Featured from '../components/Featured'
import ListOfMovies from '../components/ListOfMovies'

class MovieList extends Component {
  state = {
    apiKey: '8d06228140322691066ef39ba52dfbb4',
    movies: [],
    featuredMovie: {}
  }

  componentDidMount() {
    this.getMoviesFromApi()
  }

  getMoviesFromApi = () => {
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
        <Header />
        <Featured featuredMovie={this.state.featuredMovie} />
        <ListOfMovies movies={this.state.movies} />
      </>
    )
  }
}

export default MovieList

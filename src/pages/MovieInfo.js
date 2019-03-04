import React, { Component } from 'react'
import axios from 'axios'
import CastList from '../components/CastList'
import MovieDetails from '../components/MovieDetails'
import Breadcrumb from '../components/Breadcrumb'

class MovieInfo extends Component {
  state = {
    apiKey: '8d06228140322691066ef39ba52dfbb4',
    results: [],
    title: '',
    description: '',
    releaseDate: '',
    poster: '',
    id: '',
    cast: []
  }

  componentDidMount() {
    this.getMovieInfo()
    this.getCast()
  }

  getMovieInfo = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${
          this.props.match.params.movieID
        }?api_key=${this.state.apiKey}&language=en-US`
      )
      .then(resp => {
        console.log({ resp })
        this.setState({
          title: resp.data.original_title,
          description: resp.data.overview,
          releaseDate: resp.data.release_date,
          poster: resp.data.poster_path
        })
        console.log(this.state)
      })
  }

  getCast = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${
          this.props.match.params.movieID
        }/credits?api_key=${this.state.apiKey}`
      )
      .then(resp => {
        this.setState({
          cast: resp.data.cast
        })
      })
  }

  render() {
    return (
      <div>
        <Breadcrumb />
        <MovieDetails
          title={this.state.title}
          releaseDate={this.state.releaseDate}
          description={this.state.description}
          poster={this.state.poster}
        />
        <CastList cast={this.state.cast} />
      </div>
    )
  }
}
export default MovieInfo

import React, { Component } from 'react'
import axios from 'axios'
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
    this.getCast()
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
        <figure>
          <h1>{this.state.title}</h1>
          <h1>{this.state.releaseDate}</h1>
          <h3>{this.state.genre}</h3>
          <img
            src={`https://image.tmdb.org/t/p/original${this.state.poster}`}
            alt=""
          />
          <figcaption>{this.props.description}</figcaption>
        </figure>
        <ul>
          {this.state.cast.map((cast, i) => {
            return <li key={i}>{this.state.cast[i].name}</li>
          })}
        </ul>
      </div>
    )
  }
}
export default MovieInfo

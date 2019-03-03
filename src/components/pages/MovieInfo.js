import React, { Component } from 'react'
import MovieInfo from '../MovieInfo'
import axios from 'axios'

class MovieInfo extends Component {
  state = {
    apiKey: '8d06228140322691066ef39ba52dfbb4'
   // results: [],
   // title: '',
    //description: '',
  //  releaseDate: '',
  //  poster: '',
   // id: ''
    ///this is where state will go, move name, image link, etc
  }

  componentDidMount() {
    const APIkey = Object.keys(this.state.id)
    console.log(APIkey)
    axios
      .get(
        'https://api.themoviedb.org/3/movie${
          this.props.match.params.movieInfo
     ?api_key=8d06228140322691066ef39ba52dfbb4&append_to_response=images`
    })

      

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
        this.props.match.params.movie
      }/credits?api_key=8d06228140322691066ef39ba52dfbb46`
    )
    .then(resp => {
      console.log({ resp })

      this.setState({
        cast: resp.data.cast
      })
      console.log(this.state.cast[1].name)
    })
}

render() {
  return (
    <>
      <MovieInfo
        title={this.state.title}
        description={this.state.description}
        genre={this.state.genre}
        releaseDate={this.state.releaseDate}
        poster={`//https:image.tmdb.org/t/p/original${this.state.poster}`}
        // cast={this.state.cast.name}
      />
      <ul>
        {this.state.cast.map((cast, i) => {
          console.log(cast)
          return <li key={i}>{this.state.cast[i].name}</li>
        })}
      </ul>
    </>
  )
}
}
export default MovieInfo

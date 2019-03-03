import React, { Component } from 'react'
//import MovieDetails from '../components/MovieDetails'
import axios from 'axios'

class Home extends Component {
  state = {
    results: [],
    title: '',
    description: '',
    releaseDate: '',
    poster: '',
    id: ''
  }

  componentDidMount() {
    const APIkey = Object.keys(this.state.id)
    console.log(APIkey)
    axios
      .get(
        'https://api.themoviedb.org/3/movie/now_playing?api_key=8d06228140322691066ef39ba52dfbb4'
      )
      .then(resp => {
        console.log({ resp })
        render() {
          return (
            <>
              <main>
                <header>
                  <h1>NOW PLAYING</h1>
                </header>
                {this.state.results.map((movie, i) => {
                  console.log(movie)
                  return (
                    <figure key={i}>
                      <h2>{this.state.results[i].title}</h2>
                      <img>?</img>
                      <figcaption>{this.state.results[i].overview}</figcaption>
                      <h3>{this.state.results[i].release_date}</h3>
                    </figure>
                  )
                })}
              </main>
            </>
          )
        }
      }
      
      export default Home
      
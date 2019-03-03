import React, { Component } from 'react'

class MovieList extends Component {
  render() {
    return (
      <>
        <header>
          <h1>Now Showing</h1>
        </header>
        <section class="highlighted-movie">
          <h2>Featuring</h2>
          <p>Highlighted Movie</p>
        </section>
        <ul>
          <li>Title</li>
          <li>Title</li>
          <li>Title</li>
        </ul>
      </>
    )
  }
}

export default MovieList

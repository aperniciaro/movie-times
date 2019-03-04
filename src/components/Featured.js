import React, { Component } from 'react'

class Featured extends Component {
  render() {
    return (
      <section className="highlighted-movie">
        <h2>Featuring: </h2>
        <p>{this.props.featuredMovie.title}</p>
      </section>
    )
  }
}

export default Featured

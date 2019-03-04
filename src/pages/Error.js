import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Error extends Component {
  render() {
    return (
      <>
        <h1>Error, page not found</h1>
        <Link to="/">Return to Now Showing</Link>
      </>
    )
  }
}

export default Error

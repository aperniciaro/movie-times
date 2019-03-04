import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Error extends Component {
  render() {
    return (
      <>
        <h6>Error, page not found</h6>
        <Link to="/">Return to Now Showing</Link>
      </>
    )
  }
}

export default Error

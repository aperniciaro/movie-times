import React, { Component } from 'react'

class CastList extends Component {
  render() {
    return (
      <>
        <p>Cast: </p>
        <ul className="cast-list">
          {this.props.cast.map((cast, i) => {
            return <li key={i}>{this.props.cast[i].name}</li>
          })}
        </ul>
      </>
    )
  }
}

export default CastList

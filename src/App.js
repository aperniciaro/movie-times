import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import MovieList from './pages/MovieList'
import MovieInfo from './pages/MovieInfo'
import Error from './pages/Error'

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route exact path="/" component={MovieList} />
            <Route exact path="/Movie/:movieID" component={MovieInfo} />
            <Route component={Error} />
          </Switch>
        </Router>
      </>
    )
  }
}

export default App

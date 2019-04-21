import React, { Component } from 'react'
import styled from 'styled-components'

import { BrowserRouter, Route, Link } from "react-router-dom"
import BaseStyles from './components/base-styles'

import Home from '../src/pages/home'
import Playfulbet from './pages/playfulbet'

const Navigation = styled.div`
  display: none;
`

class App extends Component {
  render () {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}> 
        <BaseStyles />

        <Navigation>
          <Link to="/">Home</Link>
          <Link to="/playfulbet">Playfulbet</Link>
        </Navigation>
        
        <Route exact path="/" component={Home} />
        <Route path="/playfulbet" component={Playfulbet} />
      </BrowserRouter>      
    )
  }
}

export default App

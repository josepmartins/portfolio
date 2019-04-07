import React, { Component } from 'react'
import styled from 'styled-components'
import { BrowserRouter, Route, Link } from "react-router-dom"
import About from '../src/pages/about'
import Home from '../src/pages/home'
import Playfulbet from '../src/pages/playfulbet'

const BaseStyles = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  margin: 0;
  padding: 0;
`

const Navigation = styled.div`
`

class App extends Component {
  render () {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}> 
        <BaseStyles>

          <Navigation>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/playfulbet">Playfulbet</Link>
          </Navigation>
          
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/playfulbet" component={Playfulbet} />
        </BaseStyles>
      </BrowserRouter>      
    )
  }
}

export default App

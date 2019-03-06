import React, { Component } from 'react'
import styled from 'styled-components'

const BaseStyles = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  margin: 0;
  padding: 0;
`

const Wrapper = styled.div`
  margin: 10vh 7vw;
`

const Text = styled.div`
  margin-bottom: 5vh;
  font-size: 5vw;
  line-height: 6vw;
`

class App extends Component {
  render () {
    return (
      <BaseStyles>
        <Wrapper>
          <Text>
            Hola! 
            <span role="img" aria-label="emoji">👋</span>
          </Text>

          <Text>
            I'm Josep Martins, a digital product designer currently living in sunny Barcelona.
          </Text>

          <Text>
            I've never liked specializing in anything in particular and that's why I love learning different skills in a self-taught way.
          </Text>

          <Text>
            I work as a product designer at <a target='_blank' rel="noopener noreferrer" href='http://www.typeform.com'>Typeform</a>, improving the form creation experience and developing our design system.
          </Text>

          <Text>
            If you'd like to talk or have a coffee, contact me <a target='_blank' rel="noopener noreferrer" href='mailto:jsp.mrtns@gmail.com'>here</a>. You can also take a look at my pictures on <a target='_blank' rel="noopener noreferrer" href='http://www.instagram.com/josepmartins'>Instagram</a>.
          </Text>

        </Wrapper>
      </BaseStyles>
    )
  }
}

export default App

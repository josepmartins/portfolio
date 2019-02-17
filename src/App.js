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
            Before that, I worked in cold Berlin as a designer at <a target='_blank' rel="noopener noreferrer" href='http://www.8fit.com'>8fit</a>, where I learned how to design for mobile products—and how much they can differ from the web.
          </Text>

          <Text>
            My first job was at <a target='_blank' rel="noopener noreferrer" href='http://www.itnig.net'>itnig</a>, as a frontend developer in a startup accelerator. I worked on projects with totally different business and product needs.
          </Text>

          <Text>
            One of those projects was <a target='_blank' rel="noopener noreferrer" href='http://www.playfulbet.com'>Playfulbet</a>, where I worked for two years as a frontend developer and designer.
          </Text>

          <Text>
            We improved the structure, unified patterns and interaction, and added new functionalities— while always listening to the feedback of our users.
          </Text>

          <Text>
            It was one of the best experiences of my life, because I was part of a successful project created from scratch with only 4 people and a lot of enthusiasm.
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

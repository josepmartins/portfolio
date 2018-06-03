import React, { Component } from 'react'
import styled from 'styled-components'

const BaseStyles = styled.div`
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
          </Text>

          <Text>
            I'm Josep Martins, a digital product designer currently living in the sunny Barcelona.
          </Text>

          <Text>
            I've never liked specializing in anything in particular and that's why I love learning and acquiring different skills in a self-taught way.
          </Text>

          <Text>
            I work as a product designer at <a target='_blank' href='http://www.typeform.com'>Typeform</a>, improving the form creation experience and giving support to our design system continuous development.
          </Text>

          <Text>
            Before that, I worked in the cold Berlin as a designer at <a target='_blank' href='http://www.8fit.com'>8fit</a>, where I learned how different mobile products compared to the web could be.
          </Text>

          <Text>
            My first job was at <a target='_blank' href='http://www.itnig.net'>itnig</a>, as a frontend developer in a startup accelerator where I worked on projects with totally different business and product needs.
          </Text>

          <Text>
            One of those projects was <a target='_blank' href='http://www.playfulbet.com'>Playfulbet</a>, where I joined and worked for two years as frontend and designer.
          </Text>

          <Text>
            We improved the structure, unified patterns and interaction while adding new functionalities. Always listening to the feedback of our users.
          </Text>

          <Text>
            So far one of the best experiences I have lived, being part of a successful project created from the scratch with only 4 people and a lot of enthusiasm.
          </Text>

          <Text>
            If you would like to talk or to have a a coffee, contact me <a target='_blank' href='mailto:jsp.mrtns@gmail.com'>here</a>. You can also have a look to my pictures on <a target='_blank' href='http://www.instagram.com/josepmartins'>Instagram</a>.
          </Text>

          <Text>
            <span>✌</span>
          </Text>
        </Wrapper>
      </BaseStyles>
    )
  }
}

export default App

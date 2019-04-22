import React from 'react'
import styled from 'styled-components'

const Text = styled.div`
  margin-bottom: 5vh;
  font-size: 5vw;
  line-height: 6vw;
`
const Wrapper = styled.div`
  margin: 10vh 7vw;
`

const Home = () => (
  <Wrapper>
    <Text>
      Hola! 
      <span role="img" aria-label="emoji">👋</span>
    </Text>

    <Text>
    I'm Josep Martins, a digital product designer currently living in sunny Barcelona.
    </Text>

    <Text>
    I work as a product designer at <a target='_blank' rel="noopener noreferrer" href='http://www.typeform.com'>Typeform</a>, improving the form creation experience and developing our design system.
    </Text>

    <Text>
    If you'd like to talk or have a coffee, contact me <a target='_blank' rel="noopener noreferrer" href='mailto:jsp.mrtns@gmail.com'>here</a>.
    </Text>
  </Wrapper>
)

export default Home
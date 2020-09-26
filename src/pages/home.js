import React from 'react'
import styled from 'styled-components'
import { makeTextSize } from '../variables'

const Content = styled.div`
  ${makeTextSize(40, 50, 56, 72)};
  line-height: 1.125;
  margin-bottom: 5vh;
`
const Wrapper = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 10vh auto;
  padding: 0 7vw;
`

const Home = () => (
  <Wrapper>
    <Content kind='h1'>
      <small role="img" aria-label="emoji">👋🏼</small>
    </Content>

    <Content>
      I'm Josep Martins, a digital product designer currently living in sunny Barcelona.
    </Content>

    <Content>
      Design systems at <a target='_blank' rel="noopener noreferrer" href='https://newrelic.com/'>New Relic</a>, previously at <a target='_blank' rel="noopener noreferrer" href='https://typeform.com/'>Typeform</a>.
    </Content>

    <Content>
      If you'd like to talk or have a coffee, contact me <a target='_blank' rel="noopener noreferrer" href='mailto:jsp.mrtns@gmail.com'>here</a>.
    </Content>
  </Wrapper>
)

export default Home
import React from 'react'
import styled from 'styled-components'

const Content = styled.h1`
  font-size: clamp(3rem, 10vw, 5rem);
  line-height: 5.33333rem;
  letter-spacing: -0.1111111111111111rem;
`
const Wrapper = styled.div`
  width: 100%;
  padding: 5vh 3vw;
`

const Home = () => (
  <Wrapper>
    <Content>
      <p>
        ☺ I'm Josep Martins, a digital product designer and <a target='_blank' rel="noopener noreferrer" href='https://www.instagram.com/josepmartins/'>photograhper</a> currently living in ☀ Barcelona.
      </p>
      <p>
        I build design systems at <a target='_blank' rel="noopener noreferrer" href='https://newrelic.com/'>New Relic</a>. Previously at <a target='_blank' rel="noopener noreferrer" href='https://typeform.com/'>Typeform</a> and <a target='_blank' rel="noopener noreferrer" href='https://8fit.com/'>8fit</a>.
      </p>
      <p>
        ✉ <a target='_blank' rel="noopener noreferrer" href='mailto:jsp.mrtns@gmail.com'>Email me</a> if you would like to talk or work together.
      </p>
    </Content>
  </Wrapper>
)

export default Home
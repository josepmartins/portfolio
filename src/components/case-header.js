import React from 'react'
import styled from 'styled-components'
import Content from '../components/content'
import { minWidth } from '../variables'

const HeaderWrapper = styled.div`
  margin-bottom: 15vh;

  @media (min-width: ${minWidth}px) {    
    display: flex;
  }
`

const HeaderContent = styled.div`
  margin-top: 20vh;
  margin-bottom: 5vh;

  @media (min-width: ${minWidth}px) {    
    width: 50%;
  }
`

const HeaderImage = styled.img`
  background-color: #ececec;
  object-fit: cover;
  
  @media (min-width: ${minWidth}px) {    
    height: 90vh;
    width: 50%;
  }
`

const CaseHeader = ({title, label, imgSrc}) => {
  return (
    <HeaderWrapper>
      <HeaderContent>
        <Content tag='h1' kind='h1'>{title}</Content>
        <Content kind='p2'>{label}</Content>
      </HeaderContent>
      <HeaderImage 
        loading="lazy"
        src={imgSrc}
      />
    </HeaderWrapper>
  )
}

export default CaseHeader
import React from 'react'
import styled from 'styled-components'


const HeaderTitle = styled.h1`
    margin: 0;
    line-height: 1.05;
    text-transform: uppercase;    
    font-size: 50px;
    font-size: 5rem;
    font-size: calc(50px + 16 * (100vw - 1024px)/ 416);
    font-size: calc(5rem + 16 * (100vw - 102.4rem)/ 416);
`

const HeaderSubTitle = styled.h1`

`

const Playfulbet = () => (
    <HeaderTitle>Playfulbet</HeaderTitle>
)

export default Playfulbet
import React from 'react'
import styled from 'styled-components'
import { textSizesStyles } from '../variables'


const Text = styled.div`
  ${props => textSizesStyles[props.kind]};
`

const Content = ({children, kind, tag}) => {
  return (
    <Text as={tag} kind={kind}>{children}</Text>
  )
}

Content.defaultProps = {
  tag: 'p',
  kind: 'lead'
}

export default Content
import styled, { injectGlobal } from 'styled-components'

import UnionRegularWoff from '../assets/fonts/Union-Regular.woff'
import UnionRegularWoff2 from '../assets/fonts/Union-Regular.woff2'
import UnionBoldWoff from '../assets/fonts/Union-Bold.woff'
import UnionBoldWoff2 from '../assets/fonts/Union-Bold.woff2'

injectGlobal`
	@font-face {
		font-family: 'Union';
		src: url('${UnionRegularWoff2}') format('woff2'),
				 url('${UnionRegularWoff}') format('woff');
		font-weight: 400;
	}
	@font-face {
		font-family: 'Union';
		src: url('${UnionBoldWoff2}') format('woff2'),
				 url('${UnionBoldWoff}') format('woff');
		font-weight: 700;
	}

	body {
		margin: 0;
	  padding: 0;
  }

  ::-moz-selection {
  	color: white;
  	background-color: black;
  }
	::selection {
		color: white;
		background-color: black;
	}

	*,
	*:before,
	*:after {
		box-sizing: border-box;
	}

	img {
		max-width: 100%;
	}

	p {
    margin: 0;
	}
`
const BaseStyles = styled.div`
	font-family: 'Union', -apple-system, BlinkMacSystemFont, sans-serif;
	color: black;
  margin: 0;
  padding: 0;

	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
`

export default BaseStyles

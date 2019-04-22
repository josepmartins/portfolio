import styled, { createGlobalStyle } from 'styled-components'
import UnionRegularWoff from '../assets/fonts/Union-Regular.woff'
import UnionRegularWoff2 from '../assets/fonts/Union-Regular.woff2'

const BaseStyles = createGlobalStyle`
	@font-face {
		font-family: 'Union';
		src: url('${UnionRegularWoff2}') format('woff2'),
				 url('${UnionRegularWoff}') format('woff');
		font-weight: 400;
	}

  html {
    font-size: 100%;
    line-height: 1.37;  
  }

  body {
    font-family: 'Union', -apple-system, BlinkMacSystemFont, sans-serif;
    color: #222;
    font-weight: 400; 
    margin: 0;
    padding: 0;
  
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, p {
    margin: 0; 
    font-weight: 400;
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
  
  a{
    color: #222;
  }
`

export default BaseStyles

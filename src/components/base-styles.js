import { createGlobalStyle } from 'styled-components'
import InterRegularrWoff from '../assets/fonts/Inter-Regular.woff'
import InterRegularrWoff2 from '../assets/fonts/Inter-Regular.woff2'

const BaseStyles = createGlobalStyle`
  @font-face {
		font-family: 'Inter';
		src: url('${InterRegularrWoff}') format('woff2'),
				 url('${InterRegularrWoff2}') format('woff');
		font-weight: 400;
	}

  html, body {
    font-size: 18px;
    line-height: 1.25;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    color: black;
    font-weight: 400;
    font-style: normal;
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
    color: inherit;
    text-decoration: none;

    &:hover {
      text-decoration: line-through;
      text-decoration-style: inherit;
      text-decoration-thickness: from-font;
    }
  }
`

export default BaseStyles

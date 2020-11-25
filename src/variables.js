import { css } from 'styled-components'

export const minWidth = '720'
export const midWidth = '1024'
export const maxWidth = '1440'

export const makeTextSize = (minSize, maxSize, minSizeBig, maxSizeBig ) => {
  /* font-size: calc([minimum size] + ([maximum size] - [minimum size]) * ((100vw - [minimum viewport width]) / ([maximum viewport width] - [minimum viewport width])));*/
  return `
    font-size: ${minSize}px;
    font-size: calc(${minSize}px + ${maxSize - minSize} * (100vw - ${minWidth}px)/${midWidth - minWidth});
    @media (min-width: ${minWidth}px) {
      font-size: ${minSizeBig}px;
      font-size: calc(${minSizeBig}px + ${maxSizeBig - minSizeBig} * (100vw - ${midWidth}px)/${maxWidth - midWidth});
    }
  `
}

export const textSizesStyles = {
  p2: css`
    margin-bottom: 10vh;
    ${makeTextSize(18,20, 20, 20)};
  `,
  p1: css`
    margin-bottom: 10vh;
    ${makeTextSize(18,20, 20, 24)};
  `,
  lead: css`
    margin-bottom: 7.5vh;
    ${makeTextSize(20,20, 22, 30)};
  `,
  h2: css`
    text-transform: uppercase;
    ${makeTextSize(40,48,40,48)};
  `,
  h1: css`
    text-transform: uppercase;
    ${makeTextSize(56,72,56,72)};
  `,
}
import { syntaxHighlighterPrism } from '@mdx-deck/themes'
import style from 'react-syntax-highlighter/dist/styles/prism/solarizedlight'

export default syntaxHighlighterPrism({
  prism: {
    style,
  },
  googleFont:
    'https://fonts.googleapis.com/css?family=Merriweather:300,900|Raleway:900',
  font: 'Merriweather, Open Sans, sans-serif',
  heading: {
    fontFamily: 'Raleway, Open Sans, sans-serif',
    fontWeight: '900',
    textTransform: 'uppercase',
    letterSpacing: '-0.05rem',
    textAlign: 'left',
  },
  Slide: {
    padding: '0 20vw 0 10rem',
    width: '100vw',
    alignItems: 'flex-start',
  },
  pre: {
    fontSize: '1.8rem',
    borderRadius: '12px',
    boxShadow: '0 10px 110px rgba(0,0, 0,0.3)',
    padding: '4rem !important',
    backgroundColor: '#fff !important',
  },
  p: {
    textAlign: 'left',
    fontSize: '1.2em',
    fontWeight: '300',
    margin: '1em 0',
  },
  h1: {
    fontSize: '2em',
  },
  h2: {
    fontSize: '1.7em',
  },
  h3: {
    fontSize: '1.2em',
  },
  code: {
    color: 'rgb(65,184,131)',
    fontWeight: '700',
  },
  a: {
    color: 'rgb(65,184,131)',
  },
  css: {
    strong: {
      fontWeight: '900',
      textShadow:
        '-2px -2px #e7e7e7, -2px 2px #e7e7e7, 2px -2px #e7e7e7, 2px 2px #e7e7e7',
      backgroundSize: '7px 1em',
      boxShadow: 'inset 0 -0.15em #e7e7e7, inset 0 -0.21em rgb(65,184,131)',
      display: 'inline',
    },
    small: {
      textAlign: 'left',
    },
  },
  colors: {
    text: '#333',
    background: '#e7e7e7',
  },
})

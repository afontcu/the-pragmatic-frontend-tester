import { syntaxHighlighterPrism } from '@mdx-deck/themes'
import style from 'react-syntax-highlighter/dist/styles/prism/solarizedlight'

export default syntaxHighlighterPrism({
  prism: {
    style,
  },
  googleFont:
    'https://fonts.googleapis.com/css?family=Lora:400,700|Merriweather',
  font: 'Lora, Open Sans, sans-serif',
  heading: {
    fontFamily: 'Merriweather, Open Sans, sans-serif',
    letterSpacing: '-0.05rem',
  },
  Slide: {
    padding: '0 6rem',
  },
  pre: {
    fontSize: '1.8rem',
    borderRadius: '12px',
    backgroundColor: 'inherit !important',
  },
  p: {
    fontSize: '1.3em',
  },
  h1: {
    textTransform: 'inherit',
    fontSize: '2.1em',
  },
  h2: {
    textTransform: 'inherit',
    fontSize: '2.1em',
  },
  h3: {
    textTransform: 'inherit',
    fontSize: '1.7em',
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
      textShadow:
        '-2px -2px #e7e7e7, -2px 2px #e7e7e7, 2px -2px #e7e7e7, 2px 2px #e7e7e7',
      backgroundSize: '7px 1em',
      boxShadow: 'inset 0 -0.15em #e7e7e7, inset 0 -0.21em rgb(65,184,131)',
      display: 'inline',
    },
  },
  colors: {
    text: '#333',
    background: '#e7e7e7',
  },
})

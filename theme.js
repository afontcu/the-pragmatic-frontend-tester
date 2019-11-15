import { syntaxHighlighterPrism } from '@mdx-deck/themes'
import style from 'react-syntax-highlighter/dist/styles/prism/prism'

const backgroundInitialColor = '#252525'
const backgroundFinalColor = '#05492d'
const highlightColor = 'hsl(150, 50%, 52%)'
const textColor = '#f1f1f2'

export default syntaxHighlighterPrism({
  prism: {
    style,
  },
  googleFont:
    'https://fonts.googleapis.com/css?family=Merriweather:300,700,900|Raleway:900',
  font: 'Merriweather, Open Sans, sans-serif',
  heading: {
    fontFamily: 'Raleway, Open Sans, sans-serif',
    fontWeight: '900',
    textTransform: 'uppercase',
    letterSpacing: '-0.05rem',
    textAlign: 'left',
  },
  Slide: {
    padding: '0 12vw 0 10vw',
    width: '100vw',
    alignItems: 'flex-start',
    background: `linear-gradient(120deg, ${backgroundFinalColor} 0%, ${backgroundInitialColor} 85%)`,
  },
  pre: {
    fontSize: '1.8rem !important',
    borderRadius: '12px',
    boxShadow: '0 10px 110px rgba(0, 0, 0, 0.3)',
    padding: '4rem !important',
    backgroundColor: '#fff !important',
    fontWeight: '700',
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
  a: {
    color: highlightColor,
  },
  css: {
    strong: {
      fontWeight: '900',
      boxShadow: `inset 0 -1rem 6rem ${highlightColor}`,
      padding: '0 0.5rem',
      display: 'inline',
    },
    small: {
      textAlign: 'left',
    },
  },
  colors: {
    text: textColor,
    background: '#e7e7e7',
  },
})

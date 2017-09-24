
import ReactStyleSheets from 'react-style-sheets';

export default ReactStyleSheets.createUniqueClassStyles({
  common: {
    fontFamily: '"Roboto", sans-serif',
    fontSize: '14px',
    width: '100%'
  },
  boxContainer: {
    width: '80%',
    margin: '2em auto'
  },
  footer: {
    zIndex: '99999',
    position: 'absolute',
    bottom: 0,
    boxSizing: 'border-box',
    width: '100%',
    height: '3em',
    padding: '0 1.5em',
    lineHeight: '3em',
    backgroundColor: 'rgba(0,0,0,.9)'
  }
});

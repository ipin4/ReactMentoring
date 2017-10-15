
import ReactStyleSheets from 'react-style-sheets';

export default ReactStyleSheets.createUniqueClassStyles({
  filmContainer: {
    position: 'relative'
  },
  rightContainer: {
    boxSizing: 'border-box',
    fontWeight: '300',
    color: 'rgb(125,125,125)',
    width: '70%',
    paddingLeft: '3em',
    height: 'auto',
    float: 'right'
  },
  button: {
    position: 'absolute',
    top: '-3.7em',
    right: 0
  },
  pinkText: {
    color: 'rgb(245,82,99)'
  },
  whiteText: {
    fontWeight: '400',
    color: '#bdbdbd',
    margin: '1em 2em 2em 0',
    display: 'inline-block'
  },
  smallText: {
    fontSize: '11px',
    marginTop: '2em',
    maxWidth: '50em'
  }
});

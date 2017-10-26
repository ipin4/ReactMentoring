
import ReactStyleSheets from 'react-style-sheets';

export default ReactStyleSheets.createUniqueClassStyles({
  container: {
    boxSizing: 'border-box',
    width: '33.3%',
    padding: '1em 1.8em',
    display: 'inline-block'
  },
  image: {
    marginBottom: '1em',
    width: '100%'
  },
  leftBox: {
    width: '100%',
    display: 'inline-block'
  },
  name: {
    fontSize: '16px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    overflow: 'hidden',
    height: '16px',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis'
  },
  genre: {
    fontSize: '10px',
    padding: '.2em 0'
  },
  year: {
    fontSize: '10px',
    float: 'right',
    border: 'solid 1px black',
    padding: '.2em .8em'
  }
});

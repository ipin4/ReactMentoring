
import ReactStyleSheets from 'react-style-sheets';

export default ReactStyleSheets.createUniqueClassStyles({
  container: {
    boxSizing: 'border-box',
    width: '33.3%',
    padding: '1em 1.8em',
    display: 'inline-block'
  },
  image: {
    marginBottom: '1em'
  },
  leftBox: {
    display: 'inline-block'
  },
  name: {
    fontSize: '16px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
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

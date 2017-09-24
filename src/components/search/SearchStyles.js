
import ReactStyleSheets from 'react-style-sheets';

export default ReactStyleSheets.createUniqueClassStyles({
  headerContainer: {
    width: '80%',
    margin: '0 auto',
    color: 'white'
  },
  input: {
    boxSizing: 'border-box',
    display: 'block',
    width: '100%',
    lineHeight: '3.8em',
    margin: '0 0 2em 0',
    padding: '0 2em',
    backgroundColor: 'black',
    color: 'white',
    border: '0px',
    borderBottom: 'solid .2em rgb(245,82,99)'
  },
  searchBy: {
    display: 'inline-block'
  },
  search: {
    float: 'right'
  }
});

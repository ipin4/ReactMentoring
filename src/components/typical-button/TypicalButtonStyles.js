
import ReactStyleSheets from 'react-style-sheets';

export default ReactStyleSheets.createUniqueClassStyles({
  default: {
    lineHeight: '2em',
    margin: '0 0 0 1.5em',
    padding: '0.2em 1em',
    backgroundColor: 'rgb(60,60,60)',
    color: 'white',
    border: 0,
    borderRadius: '.3em',
    cursor: 'pointer',
    boxShadow: 'black 0 0 10px'
  },
  typical: {

  },
  search: {
    lineHeight: '3em',
    height: '3em',
    padding: '0 3.5em',
    backgroundColor: 'rgb(245,82,99)'
  },
  active: {
    backgroundColor: 'rgb(245,82,99)'
  },
  searchBack: {
    color: 'rgb(245,82,99)',
    backgroundColor: 'white'
  }
});

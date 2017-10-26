
import ReactStyleSheets from 'react-style-sheets';

export default ReactStyleSheets.createUniqueClassStyles({
  infoRow: {
    height: '3em',
    lineHeight: '3em',
    margin: '0 auto',
    padding: '0 5em',
    backgroundColor: 'rgb(245,245,245)',
    fontWeight: 'bold'
  },
  rightRow: {
    float: 'right'
  },
  buttons: {
    cursor: 'pointer',
    margin: '0 0 0 1.5em '
  },
  active: {
    cursor: 'pointer',
    margin: '0 0 0 1.5em ',
    color: 'rgb(245,82,99)'
  }
});

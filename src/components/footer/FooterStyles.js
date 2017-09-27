
import ReactStyleSheets from 'react-style-sheets';

export default ReactStyleSheets.createUniqueClassStyles({
  footer: {
    zIndex: '99999',
    position: 'fixed',
    bottom: 0,
    boxSizing: 'border-box',
    width: '100%',
    height: '3em',
    padding: '0 1.5em',
    lineHeight: '3em',
    backgroundColor: 'rgba(0,0,0,.9)'
  }
});

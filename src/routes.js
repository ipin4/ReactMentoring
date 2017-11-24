import Content from './components/content/Content';
import FilmHeader from './components/film-header/FilmHeader';

export default [
  {
    path: '/film/:data/:itemType',
    component: FilmHeader
  },
  {
    path: '/:page/:data/:itemType',
    component: Content
  },
]

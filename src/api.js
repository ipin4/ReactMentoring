const netflixAPI = {
  mainUrl: 'http://netflixroulette.net/api/api.php?',
  data: [{
    name: 'one',
    genre: 'some genre',
    year: 1990,
    duration: 154,
    description: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    director: 'Quentin Tarantino',
    cast: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    img: '1.png',
    oskar: 'Oskar-winning movies',
    raiting: 9
  }, {
    name: 'two',
    genre: 'dfdsfsd genre',
    year: 2018,
    duration: 154,
    description: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    director: 'Tarantino',
    cast: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    img: '1.png',
    oskar: 'Oskar-winning movies',
    raiting: 4
  }, {
    name: 'three',
    genre: 'rgeraf genre',
    year: 2014,
    duration: 154,
    description: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    director: 'Quentin',
    cast: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    img: '1.png',
    oskar: 'Oskar-winning movies',
    raiting: 7
  }],
  searchInCollection: function (sortType, sortBy, searchBy, searchValue) {
    const regExp = new RegExp(searchValue, 'ig');
    console.log(searchValue)
    return this.sortCollection(
      sortType,
      sortBy,
      this.data.filter(item => {
        return regExp.test(
          item[searchBy].toLowerCase()
        );
      })
    );
  },
  parseParams: function(hash) {
    return hash.replace('?', '')
               .split('=');
  },
  sortCollection: function (sortType, sortBy, data) {
    const renderArray = data || this.data;
    switch (sortType) {
      case 'name':
        return renderArray.sort(function(a, b) {
          const nameA = a.name.toLowerCase();
          const nameB = b.name.toLowerCase();
          if (nameA < nameB) return -1;
          if (nameA > nameB) return 1;
          return 0;
        });
      case 'number':
        return renderArray.sort(function (a, b) {
          return b[sortBy] - a[sortBy];
        });
      default:
        return renderArray;
    }
  },
  get getFirstData() {
    return this.sortCollection('number', 'year');
  },
  getFirstItem: function(name) {
    return this.data.filter(item => {
            return item.name
                    .toLowerCase()
                    .indexOf(name) >= 0;
          })[0];
  },
  getLocation: function(split) {
    const path = window.location.hash;
    return split ? path.split('/') : path;
  }
}

export default netflixAPI

const netflixAPI = {
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

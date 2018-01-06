class DataApi {
  constructor(rawData) {
    this.rawData = rawData;
  }

  MapArrToObject(arr) {
    return arr.reduce((acc, curr) => {
      acc[curr.id] = curr;
      return acc;
    }, {});
  }
  getArticles() {
    return this.MapArrToObject(this.rawData.articles);
  }
  getAuthors() {
    return this.MapArrToObject(this.rawData.authors);
  }
}

export default DataApi;

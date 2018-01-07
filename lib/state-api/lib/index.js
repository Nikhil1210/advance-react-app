class StateApi {
  constructor(rawData) {
    this.data = {
      articles: this.MapArrToObject(rawData.articles),
      authors: this.MapArrToObject(rawData.authors)
    };
  }

  MapArrToObject(arr) {
    return arr.reduce((acc, curr) => {
      acc[curr.id] = curr;
      return acc;
    }, {});
  }

  getState = () => {
    return this.data;
  }
  lookupAuthor = (authorId) => {
    return this.data.authors[authorId];
  }
}
export default StateApi;

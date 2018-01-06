import React, {Component} from 'react';
import {data} from '../testData';
import DataApi from '../DataApi';
import ArticlesList from './ArticlesList';

const api = new DataApi(data);

class App extends Component {
  constructor() {
    super();
    this.state = {
      articles: api.getArticles(),
      authors: api.getAuthors()
    };
  }
  // lookup Author
  articleActions = {
    lookupAuthor: (authorId) => this.state.authors[authorId]
  }
  render() {
    return (<ArticlesList
      articles={this.state.articles}
      articleActions={this.articleActions}/>);
  }
}

export default App;

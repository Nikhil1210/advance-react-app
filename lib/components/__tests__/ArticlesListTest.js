import React from 'react';
import ArticleList from '../ArticlesList';
import renderer from 'react-test-renderer';

describe('ArticleList', () => {
  const testProps = {
    articles: {
      a: {
        id: 'a'
      },
      b: {
        id: 'b'
      }
    },
    articleActions: {
      lookupAuthor: jest.fn(() => ({}))
    }
  };
  it('renderes the component', () => {
    const tree = renderer
      .create(<ArticleList {...testProps}/>)
      .toJSON();
    expect(tree.children.length).toBe(2);
    expect(tree).toMatchSnapshot();
  });
});

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import PostContainer from './components/PostContainer/PostContainer';
import dummyData from './dummy-data';

import './App.css';


class App extends Component {
  render() {
    const posts = dummyData.map(post => (<PostContainer comments={post.comments}/>))
    return (
      <div className="App">
        <p>HI</p>
        {posts}
      </div>
    );
  }
}

App.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string,
    likes: PropTypes.number,
    timestamp: PropTypes.string,
    comments: PropTypes.arrayOf(PropTypes.object),
  }))
}

export default App;

import React, { Component } from 'react';

import PostContainer from './components/PostContainer/PostContainer';
import dummyData from './dummy-data';

import './App.css';


class App extends Component {
  render() {
    const posts = dummyData.map(post => (<PostContainer key={post.username} comments={post.comments}/>))
    return (
      <div className="App">
        <p>HI</p>
        {posts}
      </div>
    );
  }
}

export default App;

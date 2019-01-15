import React, { Component } from 'react';

import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';
import dummyData from './dummy-data';

import './App.css';


class App extends Component {
  render() {
    const posts = dummyData.map(post => (<PostContainer key={post.username} post={post}/>))
    return (
      <div className="App">
        <SearchBar />
        {posts}
      </div>
    );
  }
}

export default App;

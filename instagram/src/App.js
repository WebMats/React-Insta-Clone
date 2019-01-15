import React, { Component } from 'react';

import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';
import dummyData from './dummy-data';
import './App.css';


class App extends Component {
  state = {
    dummyData: [],
    searchedUser: ''
  }

  componentDidMount() {
    this.setState({dummyData})
  }
  searchUserHandler = (e) => {
    e.preventDefault();
    this.setState(prevState => {
      if (prevState.searchedUser.length === 0) {
        return this.setState({dummyData})    
      }
      const copiedData = [...prevState.dummyData].filter(post => post.username.includes(prevState.searchedUser))
      return {dummyData: copiedData, searchedUser: '',}
    })
  }

  render() {
    const posts = this.state.dummyData.map(post => (<PostContainer key={post.username} post={post}/>))
    return (
      <div className="App">
        <SearchBar changed={(e) => this.setState({searchedUser: e.target.value})} inputValue={this.state.searchedUser} searchUser={this.searchUserHandler} />
        {posts}
      </div>
    );
  }
}

export default App;

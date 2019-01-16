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
    this.setState({dummyData: localStorage.getItem('data') === null ? dummyData : JSON.parse(localStorage.getItem('data'))})
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

  saveDataInLocalStorage = () => {
    localStorage.setItem('data', JSON.stringify(this.state.dummyData));
  }

  updateCommentsHandler = (newComments, i) => {
    this.setState(prevState => {
      let copiedData = [...prevState.dummyData];
      const updatedPost = {...copiedData[i], comments: newComments}
      copiedData.splice(i, 1, updatedPost);
      return {dummyData: copiedData}
    }, this.saveDataInLocalStorage)
  }

  render() {
    const posts = this.state.dummyData.map((post, i) => (<PostContainer postIndex={i} updateComments={this.updateCommentsHandler} key={post.username} post={post}/>))
    return (
      <div className="App">
        <SearchBar changed={(e) => this.setState({searchedUser: e.target.value})} inputValue={this.state.searchedUser} searchUser={this.searchUserHandler} />
          {posts}
      </div>
    );
  }
}

export default App;

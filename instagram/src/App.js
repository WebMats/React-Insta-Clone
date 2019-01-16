import React, { Component } from 'react';

import Authentication from './Authentication';
import PostsPage from './components/PostContainer/PostsPage/PostsPage';
import Login from './components/Login/Login';
import './App.css';


class App extends Component {
  state = {
    isAuthenticated: false
  }

  loginHandler = (credentials) => {

  }

  render() {
    return (
      <div className="App">
        <PostsPage/>
        <Login submitCredentials={this.loginHandler} />
      </div>
    );
  }
}

export default Authentication(App);

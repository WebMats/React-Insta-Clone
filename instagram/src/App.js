import React, { Component } from 'react';

import Authentication from './Authentication';
import PostsPage from './components/PostContainer/PostsPage/PostsPage';
import LoginPage from './components/Login/Login';
import './App.css';


class App extends Component {
  state = {
    userName: ''
  }

  render() {
    return (
      <div className="App">
        <PostsPage user={this.props.user}/>
      </div>
    );
  }
}

export default Authentication(App)(LoginPage);

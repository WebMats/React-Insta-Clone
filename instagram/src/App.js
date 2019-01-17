import React, { Component } from 'react';
import styled from 'styled-components';

import Authentication from './Authentication';
import PostsPage from './components/PostContainer/PostsPage/PostsPage';
import LoginPage from './components/Login/Login';

const AppStyle = styled.div`
        padding-top: 3rem;
        width: 966px;
        margin: 0 auto;
`


class App extends Component {
  state = {
    userName: ''
  }

  render() {
    return (
      <AppStyle>
        <PostsPage user={this.props.user}/>
      </AppStyle>
    );
  }
}

export default Authentication(App)(LoginPage);

import React, { Component } from 'react';

import SearchBar from '../../SearchBar/SearchBar';
import PostContainer from './../PostContainer';

import dummyData from '../../../dummy-data';


class PostsPage extends Component {
    state = {
        dummyData: [],
        searchedUser: ''
    }

    componentDidMount() {
        this.setState({dummyData: localStorage.getItem('data') === null ? dummyData : JSON.parse(localStorage.getItem('data'))})
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
      searchUserHandler = (e) => {
        e.preventDefault();
        this.setState(prevState => {
          if (prevState.searchedUser.length === 0) {
            return this.setState({dummyData})    
          }
          const copiedData = [...prevState.dummyData].filter(post => post.username.includes(prevState.searchedUser))
          return {dummyData: copiedData, searchedUser: ''}
        })
      }

    render(){
        const posts = this.state.dummyData.map((post, i) => (<PostContainer 
                                                                user={this.props.user} 
                                                                postIndex={i} 
                                                                updateComments={this.updateCommentsHandler} 
                                                                key={post.username} post={post}
                                                            />))
        return (    
            <React.Fragment>
                <SearchBar changed={(e) => this.setState({searchedUser: e.target.value})} inputValue={this.state.searchedUser} searchUser={this.searchUserHandler} />
                {posts}
            </React.Fragment>
            );
    }
}

export default PostsPage;
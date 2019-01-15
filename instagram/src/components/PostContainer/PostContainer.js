import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ImageSection from './ImageSection/ImageSection';
import CommentSection from './CommentSection/CommentSection';

import './PostContainer.css';


class PostContainer extends Component {
        state = {
                newComment: '',
                comments: this.props.post.comments
        }

        submitCommentHandler = (e) => {
                e.preventDefault();
                this.setState(prevState => {
                        let copiedComments = [...prevState.comments];
                        copiedComments.push({ username: this.props.post.username, text: this.state.newComment});
                        return {newComment: '', comments: copiedComments};
                })
        }

        render() {
        return (
                <div className="PostContainer">
                        <ImageSection 
                                user={this.props.post.username} 
                                thumbnail={this.props.post.thumbnailUrl} 
                                imageUrl={this.props.post.imageUrl} 
                        />
                        <CommentSection 
                                changed={(e) => {this.setState({newComment: e.target.value})}} 
                                inputValue={this.state.newComment} likes={this.props.post.likes} 
                                comments={this.state.comments}
                                submitComment={this.submitCommentHandler} 
                        />
                </div>
        )
}
}

PostContainer.propTypes = {
        comments: PropTypes.array,
        addComment: PropTypes.func
}

export default PostContainer;
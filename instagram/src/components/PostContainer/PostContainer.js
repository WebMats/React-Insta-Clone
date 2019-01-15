import React from 'react';
import PropTypes from 'prop-types';

import ImageSection from './ImageSection/ImageSection';
import CommentSection from './CommentSection/CommentSection';

import './PostContainer.css';


const postContainer = ({post}) => (
        <div className="PostContainer">
                <ImageSection user={post.username} thumbnail={post.thumbnailUrl} imageUrl={post.imageUrl} />
                <CommentSection likes={post.likes} comments={post.comments} />
        </div>
       
)

postContainer.propTypes = {
        comments: PropTypes.array
}

export default postContainer;
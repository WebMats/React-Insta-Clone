import React from 'react';
import PropTypes from 'prop-types';

import CommentSection from './CommentSection/CommentSection';

import './PostContainer.css';


const postContainer = (props) => (
       <CommentSection comments={props.comments} />
)

postContainer.propTypes = {
        comments: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default postContainer;
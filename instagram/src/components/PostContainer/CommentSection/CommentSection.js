import React from 'react';
import PropTypes from 'prop-types';

import Comment from './Comment/Comment';

import './CommentSection.css';


const commentSection = (props) => {

        const comments = props.comments.map((comment, i) => (<Comment key={i} comment={comment} />))

        return comments;
}

commentSection.propTypes = {
        comments: PropTypes.arrayOf(PropTypes.object)
}

export default commentSection;
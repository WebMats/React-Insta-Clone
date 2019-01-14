import React from 'react';

import Comment from './Comment/Comment';

import './CommentSection.css';


const commentSection = (props) => {

        const comments = props.comments.map(comment => (<Comment comment={comment} />))

        return comments;
}

export default commentSection;
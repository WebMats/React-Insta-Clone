import React from 'react';
import PropTypes from 'prop-types';

import Comment from './Comment/Comment';
import CommentIcons from './CommentIcons/CommentIcons.js';

import './CommentSection.css';


const commentSection = (props) => {

        const comments = props.comments.map((comment, i) => (<Comment key={i} comment={comment} />))

        return (
                <React.Fragment>
                        <CommentIcons likes={props.likes} />
                        {comments}
                        <input name="newComment" placeholder="Add a comment..." />
                </React.Fragment>
        )
}

commentSection.propTypes = {
        comments: PropTypes.arrayOf(PropTypes.object)
}

export default commentSection;
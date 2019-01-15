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
                        <div style={{padding: "0 2rem", position: "relative"}}>
                                <input className="CommentInput" name="newComment" placeholder="Add a comment..." />
                                <span className="TripleDot">&middot;&middot;&middot;</span>
                        </div>
                </React.Fragment>
        )
}

commentSection.propTypes = {
        comments: PropTypes.arrayOf(PropTypes.object)
}

export default commentSection;
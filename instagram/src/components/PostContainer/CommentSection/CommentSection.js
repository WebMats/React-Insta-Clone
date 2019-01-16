import React from 'react';
import PropTypes from 'prop-types';

import Comment from './Comment/Comment';
import CommentIcons from './CommentIcons/CommentIcons.js';

import './CommentSection.css';


const commentSection = (props) => {

        const comments = props.comments.map((comment, i) => (<Comment
                                                                toDelete={props.toBeDeleted === i ? true : null}
                                                                 clicked={() => props.showDelete(comment, i)} 
                                                                 key={i} 
                                                                 comment={comment}
                                                                 deleted={() => props.delete(comment, i)} 
                                                                />))

        return (
                <React.Fragment>
                        <CommentIcons liked={props.liked} likes={props.likes} clicked={props.toggleLike}/>
                        {comments}
                        <form onSubmit={props.submitComment} style={{padding: "0 2rem", position: "relative"}} autoComplete="off">
                                <input 
                                        value={props.inputValue} 
                                        onChange={props.changed} 
                                        className="CommentInput" 
                                        name="newComment" 
                                        placeholder="Add a comment..." 
                                />
                                <span className="TripleDot">&middot;&middot;&middot;</span>
                        </form>
                </React.Fragment>
        )
}

commentSection.propTypes = {
        comments: PropTypes.arrayOf(PropTypes.object)
}

export default commentSection;
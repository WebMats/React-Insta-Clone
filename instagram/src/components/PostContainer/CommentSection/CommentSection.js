import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Comment from './Comment/Comment';
import CommentIcons from './CommentIcons/CommentIcons.js';



const CommentInput = styled.input`
        height: 5.5rem;
        border: none;
        font-size: 1.6rem;
        padding-left: 4px;
        border-top: 1px solid #ccc;
        width: 100%;
        outline: none;
`
const Span = styled.span`
        font-size: 2.4rem;
        position: absolute;
        bottom: 1.4rem;
        right: 1.7rem;
`


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
                                <CommentInput 
                                        value={props.inputValue} 
                                        onChange={props.changed} 
                                        name="newComment" 
                                        placeholder="Add a comment..." 
                                />
                                <Span>&middot;&middot;&middot;</Span>
                        </form>
                </React.Fragment>
        )
}

commentSection.propTypes = {
        comments: PropTypes.arrayOf(PropTypes.object)
}

export default commentSection;
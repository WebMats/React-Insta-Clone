import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const Comment = styled.p`
    font-size: 1.4rem;
    margin: 1rem 0;
    padding-left: 2rem;
    letter-spacing: 1.1px;
`
const Username = styled.span`
    font-weight: 800;
    font-size: 1.6rem;
`
const Delete = styled.span`
    background-color: darkred;
    color: white;
    padding: 2px 4px;
    margin-left: 8px;
    border-radius: 4px;
    position: relative;
    display: none;
    :hover {
        cursor: pointer;
    }
    ::after {
        content: '';
        position: absolute;
        left: -2px;
        top: 6px;
        height: 10px;
        width: 10px;
        transform: rotate(45deg);
        background-color: darkred;
        display: block;
        z-index: -1;
    }
    &.Show {
        display: inline;
    }
`

const comment = ({comment, ...props}) => {

return (
    <Comment className="Comment" onClick={props.clicked}>
        <Username>{comment.username}</Username>
        {` ${comment.text}`}
        <Delete className={props.toDelete ? "Show" : null} onClick={props.deleted}>Delete</Delete>
    </Comment>
)}

comment.propTypes = {
    comment: PropTypes.shape({
        username: PropTypes.string,
        comment: PropTypes.string
    })
}

export default comment;
import React from 'react';

import PropTypes from 'prop-types';

import './Comment.css';


const comment = ({comment, ...props}) => (
    <p className="Comment" onClick={props.clicked}>
        <span className="Username">{comment.username}</span>
        {` ${comment.text}`}
        <span className={props.toDelete ? "Delete Show" : "Delete"} onClick={props.deleted}>Delete</span>
    </p>
)

comment.propTypes = {
    comment: PropTypes.shape({
        username: PropTypes.string,
        comment: PropTypes.string
    })
}

export default comment;
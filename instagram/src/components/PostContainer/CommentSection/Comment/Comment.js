import React from 'react';

import PropTypes from 'prop-types';

import './Comment.css';


const comment = ({comment}) => (
    <p className="Comment"><span className="Username">{comment.username}</span>{` ${comment.text}`}</p>
)

comment.propTypes = {
    comment: PropTypes.shape({
        username: PropTypes.string,
        comment: PropTypes.string
    })
}

export default comment;
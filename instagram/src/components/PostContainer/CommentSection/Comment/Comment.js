import React from 'react';

import PropTypes from 'prop-types';

const comment = ({comment}) => (
    <p><span>{comment.username}</span>{comment.text}</p>
)

comment.propTypes = {
    comment: PropTypes.shape({
        username: PropTypes.string,
        comment: PropTypes.string
    })
}

export default comment;
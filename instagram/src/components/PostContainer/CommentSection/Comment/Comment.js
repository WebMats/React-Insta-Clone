import React from 'react';

const comment = ({comment}) => (
    <p><span>{comment.username}</span>{comment.text}</p>
)

export default comment;
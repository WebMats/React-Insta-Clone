import React from 'react';
import PropTypes from 'prop-types';

const commentIcons = (props) => (
    <div>
        <div>
            icon icon
        </div>
        <h3>{props.likes} likes </h3>
    </div>
)

commentIcons.propTypes = {
    likes: PropTypes.number
}

export default commentIcons;
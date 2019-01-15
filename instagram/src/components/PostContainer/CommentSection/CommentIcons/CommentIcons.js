import React from 'react';
import PropTypes from 'prop-types';

import './CommentIcons.css';


const commentIcons = (props) => (
    <div className="CommentIconHolder">
        <div className="CommentIcons">
            <span><i class="far fa-heart"></i></span>
            <span><i class="far fa-comment"></i></span>
        </div>
        <h3>{props.likes} likes </h3>
    </div>
)

commentIcons.propTypes = {
    likes: PropTypes.number
}

export default commentIcons;
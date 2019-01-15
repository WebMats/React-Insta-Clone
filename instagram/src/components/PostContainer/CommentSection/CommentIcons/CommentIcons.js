import React from 'react';
import PropTypes from 'prop-types';

import './CommentIcons.css';


const commentIcons = (props) => (
    <div className="CommentIconHolder">
        <div className={props.liked ? "CommentIcons Liked" : "CommentIcons"}>
            <span><i onClick={props.clicked} class="far fa-heart"></i></span>
            <span><i class="far fa-comment"></i></span>
        </div>
        <h3>{props.liked ? props.likes + 1 : props.likes} likes </h3>
    </div>
)

commentIcons.propTypes = {
    likes: PropTypes.number,
    clicked: PropTypes.func,
    liked: PropTypes.bool
}

export default commentIcons;
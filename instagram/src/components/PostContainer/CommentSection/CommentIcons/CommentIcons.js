import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const CommentIconHolder = styled.div`
    padding-left: 2rem;
    margin-top: 8px;
    h3 {
        font-size: 1.6rem;
        font-weight: 600;
        margin-top: 1.2rem;
        letter-spacing: 1.1px;
`
const Span = styled.span`
        * {
            margin-right: 1.6rem;
            font-size: 25px;
            font-weight: 100;
            -webkit-text-stroke: 1px white;
        }
        > i {
            transform: scaleX(-1);
        }
`
const CommentIcons = styled.div`
    &.Liked span:first-child * {
        font-weight: 800;
        color: rgb(245, 130, 130);
    }
`

const commentIcons = (props) => (
    <CommentIconHolder>
        <CommentIcons className={props.liked ? "Liked" : null}>
            <Span><i onClick={props.clicked} class="far fa-heart"></i></Span>
            <Span><i class="far fa-comment"></i></Span>
        </CommentIcons>
        <h3>{props.liked ? props.likes + 1 : props.likes} likes </h3>
    </CommentIconHolder>
)

commentIcons.propTypes = {
    likes: PropTypes.number,
    clicked: PropTypes.func,
    liked: PropTypes.bool
}

export default commentIcons;
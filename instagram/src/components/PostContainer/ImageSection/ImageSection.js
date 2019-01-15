import React from 'react';

import './ImageSection.css';

const imageSection = (props) => (
        <React.Fragment>
                <div className="ProfileHolder">
                        <img src={props.thumbnail} alt="Profile" />
                        <h2>{props.user}</h2>
                </div>
                <img className="PostImage" src={props.imageUrl} alt="Post" />
        </React.Fragment>
        
)

export default imageSection;
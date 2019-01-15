import React from 'react';
import PropTypes from 'prop-types';

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

imageSection.propTypes ={ 
        thumbnail: PropTypes.string,
        user: PropTypes.string,
        imageUrl: PropTypes.string
}

export default imageSection;
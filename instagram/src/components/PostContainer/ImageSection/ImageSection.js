import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const Profileholder = styled.div`
        display: flex;
        align-items: center;
        width: 64rem;
        margin: 0 auto;
        padding: 1.6rem;
        img {
                border-radius: 50%;
                height: 32px;
                width: 32px;
        }
        > h2 {
                height: 20px;
                margin-left: 1rem;
                font-size: 1.6rem;
                font-weight: 600;
        }
`


const imageSection = (props) => (
        <React.Fragment>
                <Profileholder>
                        <img src={props.thumbnail} alt="Profile" />
                        <h2>{props.user}</h2>
                </Profileholder>
                <img src={props.imageUrl} alt="Post" />
        </React.Fragment>
        
)

imageSection.propTypes ={ 
        thumbnail: PropTypes.string,
        user: PropTypes.string,
        imageUrl: PropTypes.string
}

export default imageSection;
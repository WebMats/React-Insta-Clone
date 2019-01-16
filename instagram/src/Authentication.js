import React, { Component } from 'react';


const authentication = App => {
    return class extends Component {
        render() {
            return <App />;
        }
    }
}


export default authentication;
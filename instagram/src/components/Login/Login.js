import React from 'react';

const login = (props) => {

        return (
                        <form onSubmit={props.submitCredentials} autoComplete="off">
                                <label>Username</label>
                                <input placeholder="Username" />

                                <label>Password</label>
                                <input placeholder="Password" />

                                <button className="LoginButton">Login</button>
                        </form>
        )
}

export default login;
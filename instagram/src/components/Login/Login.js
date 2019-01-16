import React from 'react';

const login = (props) => {

        return (
                        <form onSubmit={props.submitCredentials} autoComplete="off">
                                <label>Username</label>
                                <input value={props.inputValue} onChange={props.changed} name="username" placeholder="Username" />

                                <label>Password</label>
                                <input type="password" name="password" placeholder="Password" />

                                <button className="LoginButton">Login</button>
                        </form>
        )
}

export default login;
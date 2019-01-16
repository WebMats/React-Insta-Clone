import React from 'react';

import './Login.css';


const login = (props) => {

        const labelUsernameClassName = props.inputValue ? "LabelUsername Moved" : "LabelUsername";
        const labelPasswordClassName = props.inputPassword ? "LabelUsername Moved" : "LabelUsername";

        return (
                <form className="LoginForm" onSubmit={props.submitCredentials} autoComplete="off">
                        <h2>Login</h2>
                        <div className="InputHolder">
                                <label className={labelUsernameClassName}>Username</label>
                                <input value={props.inputValue} onChange={props.changed} name="username" placeholder="Username" autoFocus/>
                        </div>
                        <div className="InputHolder">
                                <label className={labelPasswordClassName}>Password</label>
                                <input value={props.inputPassword} onChange={props.passwordChange} type="password" name="password" placeholder="Password" />
                        </div>
                        <button className="LoginButton">Login</button>
                </form>
        )
}

export default login;
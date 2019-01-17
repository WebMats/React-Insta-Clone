import React, { Component } from 'react';


const authentication = App => Login => {
    return class extends Component {
        constructor() {
            super();
            this.state = {
                loggedIn: false,
                userName: '',
                password: '',
            }
        }
        componentDidMount() {
            if (localStorage.getItem('username') !== null && localStorage.getItem('username').length !== 0) {
                this.setState({loggedIn: true, userName: localStorage.getItem('username')})
            }
        }
        loginHandler = () => {
            localStorage.setItem('username', this.state.userName);
          }
        render() {
            return this.state.loggedIn ? <App user={this.state.userName} /> : <Login 
                                                                                changed={(e) => this.setState({userName: e.target.value})} 
                                                                                inputValue={this.state.userName} 
                                                                                submitCredentials={this.loginHandler} 
                                                                                inputPassword={this.state.password}
                                                                                passwordChange={(e) => this.setState({password: e.target.value})}
                                                                            />;
        }
    }
}


export default authentication;
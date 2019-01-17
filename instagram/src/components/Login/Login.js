import React from 'react';
import styled from 'styled-components';


const Input = styled.input`
        width: 100%;
        display: block;
        height: calc(3.6rem + 2px);
        font-size: 1.6rem;
        line-height: 1.5;
        color:#495057;
        background-color: white;
        background-clip: padding-box;
        border-radius: 5px;
        padding: 1.2rem 1.2rem;
        ::placeholder {
                color: transparent;
        }
        :not(:placeholder-shown) {
                padding-top: calc(1.2rem + 1.2rem * (2 / 3));
                padding-bottom: calc(1.2rem / 3);
        }
`
const Label = styled.label`
        position: absolute;
        top: 0;
        left: 0;
        display: block;
        width: 100%;
        line-height: 1.5;
        color: #495057;
        cursor: text; /* Match the input under the label */
        border: 1px solid transparent;
        border-radius: 4px;
        transition: all .1s ease-in-out;
        font-size: 1.6rem;
        padding: 1.2rem 1.2rem;
        &.Moved {
                padding-top: .2rem;
                padding-bottom: calc(1.2rem / 3);
                font-size: 12px;
                color: #777;
              }
`
const Form = styled.form`
        border: 1px solid #C0C0C0;
        width: 500px;
        margin: 0 auto;
        margin-top: 10%;
        padding: 4rem;
        border-radius: 5px;
        > h2 {
                font-size: 2rem;
            }
`
const InputHolder = styled.div`
        margin: 2rem 0 2rem 4rem;
        position: relative;
`
const LoginButton = styled.button`
        background-color: rgb(59, 137, 253);
        height: 3.2rem;
        width: 7rem;
        margin-left: 5rem;
        color: white;
        border-radius: 4px;
`

const login = (props) => {

        const labelUsernameClassName = props.inputValue ? "LabelUsername Moved" : "LabelUsername";
        const labelPasswordClassName = props.inputPassword ? "LabelUsername Moved" : "LabelUsername";

        return (
                <Form onSubmit={props.submitCredentials} autoComplete="off">
                        <h2>Login</h2>
                        <InputHolder>
                                <Label className={labelUsernameClassName}>Username</Label>
                                <Input value={props.inputValue} onChange={props.changed} name="username" placeholder="Username" autoFocus/>
                        </InputHolder>
                        <InputHolder>
                                <Label className={labelPasswordClassName}>Password</Label>
                                <Input value={props.inputPassword} onChange={props.passwordChange} type="password" name="password" placeholder="Password" />
                        </InputHolder>
                        <LoginButton>Login</LoginButton>
                </Form>
        )
}

export default login;
import React from 'react';
import styled from 'styled-components';


const Header = styled.div`
        display: flex;
        justify-content: space-between;
        padding: 0 1.8rem;
        padding-bottom: 2rem;
        border-bottom: 1px solid rgb(187, 187, 187);
        margin-bottom: 5rem;
`
const SearchInput = styled.input`
        width: 21.4rem;
        height: 2.8rem;
        text-align: center;
        border-radius: 3px;
        margin-right: 1.07rem;
        margin-top: 1rem;
        border: 1px solid #ccc;
        background-color: rgb(247, 247, 247);
`
const LogoHolder = styled.div`
        display: flex;
        align-items: center;
        h1 {
                font-size: 2.8rem;
                font-family: 'Norican', cursive;
                letter-spacing: 1.1px;
            }
        > span * {
                font-size: 35px;
        }
`
const VerticalLine = styled.div`
        margin: 0 2rem;
        height: 3.4rem;
        width: 1px;
        background: rgb(119, 119, 119);
`
const IconHolder = styled.div`
        margin-top: 1.2rem;
        > span {
                margin: 0 1.4rem;
                * {
                        font-size: 24px;
                        color: rgb(158, 158, 158);
                        -webkit-text-stroke: 1px white;
                }
        }
`


const searchBar = (props) => (
        <Header>
                <LogoHolder>
                        <span><i class="fab fa-instagram"></i></span>
                        <VerticalLine></VerticalLine>
                        <h1>Instagram</h1>
                </LogoHolder>
                <form onSubmit={props.searchUser} autoComplete="off">
                        <SearchInput value={props.inputValue} onChange={props.changed} name="searchBar" placeholder='Search'/>
                </form>
                <IconHolder>
                        <span><i class="far fa-compass"></i></span>
                        <span><i class="far fa-heart"></i></span>
                        <span><i class="far fa-user"></i></span>
                </IconHolder>
        </Header>
)

export default searchBar;
import React from 'react';

import './SearchBar.css';


const searchBar = (props) => (
        <div className="SearchBar">
                <div className="logo-holder">
                        <span><i class="fab fa-instagram"></i></span>
                        <div className="VerticalLine"></div>
                        <h1>Instagram</h1>
                </div>
                <form onSubmit={props.searchUser} autoComplete="off">
                        <input value={props.inputValue} onChange={props.changed} name="searchBar" placeholder='Search' className="SearchInput" />
                </form>
                <div className="IconHolder">
                        <span><i class="far fa-compass"></i></span>
                        <span><i class="far fa-heart"></i></span>
                        <span><i class="far fa-user"></i></span>
                </div>
        </div>
)

export default searchBar;
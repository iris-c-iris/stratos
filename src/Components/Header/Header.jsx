import React from 'react';
import './Header.css';
import logoOnlyW from '../Assets/logoOnlyW.png';
import SearchBar from "../SearchBar/SearchBar";

function Header() {
    return (
        <header className="header">
            <div className="header-content">
                <img src={logoOnlyW} alt="Logo" className="header-logo"/>
                <h1>STRATOS WMS</h1>
            </div>
            <div className="search-bar-container">
                <SearchBar />
            </div>
        </header>
    );
}

export default Header;
import React from 'react';
import './Header.css';
import logo from '../Assets/WhiteLogo.png';
import SearchBar from "../SearchBar/SearchBar";

function Header() {
    return (
        <header className="header">
            <div className="header-content">
                <img src={logo} alt="Logo" />
                <h1>Stratos WMS</h1>
            </div>
            <div className="search-bar-container">
                <SearchBar />
            </div>
        </header>
    );
}

export default Header;

import React from 'react';
import './Header.css';
import profile from '../../Components/Assets/profile.png';

const Header = () => {
    return (
        <header className="header">
            <div className="breadcrumb">
                <span className="breadcrumb-item">Pages</span>
                <span className="breadcrumb-separator">/</span>
                <span className="breadcrumb-item">Dashboard</span>
            </div>
            <h1 className="page-title">Main Dashboard</h1>
            <div className="header-actions">
                <form className="search-form" role="search">
                    <label htmlFor="search" className="visually-hidden">Search</label>
                    <input type="search" id="search" placeholder="Search" className="search-input" />
                    <button type="submit" className="search-button">
                        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/28e05789d380bcc10d6936d90c515e6f3a15b2aaf384905df7377d98d95400ea?placeholderIfAbsent=true&apiKey=d7229136ad094bbf8efa03382e544f03" alt="Search" />
                    </button>
                </form>
                <button className="icon-button" aria-label="Notifications">
                    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/e6634ded01afef5bb8d11059ab5d92d789eae5c88ff6f30d880ae6fc4a6b2b7f?placeholderIfAbsent=true&apiKey=d7229136ad094bbf8efa03382e544f03" alt="" />
                </button>
                <button className="icon-button" aria-label="Settings">
                    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/2d762d081bde4fd7d793d352b09f7cd0b7530428e44fb5cdf8e7763db25eb0bb?placeholderIfAbsent=true&apiKey=d7229136ad094bbf8efa03382e544f03" alt="" />
                </button>
                <button className="icon-button" aria-label="Messages">
                    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/b5bef16fc1431bcbf834ea57580ff05fb8708149bb8ca39715f73c29693d3ec8?placeholderIfAbsent=true&apiKey=d7229136ad094bbf8efa03382e544f03" alt="" />
                </button>
                <button className="icon-button profile-button" aria-label="Profile">
                    <img src={profile} alt="Profile" className="profile-button" />
                </button>
            </div>
        </header>
    );
};

export default Header;

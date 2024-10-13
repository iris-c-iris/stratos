import React, { useState, useRef } from 'react';
import './SearchBar.css'; // Import your CSS file
import ActionIcon from './ActionIcon';
import ProfileIcon from '../Assets/ProfileIcon.png';

const SearchBar = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const searchInputRef = useRef(null);
    const searchContainerRef = useRef(null);

    const handleExpand = () => {
        setIsExpanded(true);
        searchInputRef.current && searchInputRef.current.focus(); // Focus on the input when expanded
    };

    const handleBlur = () => {
        setIsExpanded(false);
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <nav
                ref={searchContainerRef}
                className={`searchContainer ${isExpanded ? 'expanded' : ''}`}
                onClick={handleExpand}
                onBlur={handleBlur}
                tabIndex="0"
            >
                <div className="searchInputWrapper">
                    <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/82dde56a50ce0d0e6c0bca71abcd5fe5b3a7ebccdc416c448d8e8f64ae2fbc43?placeholderIfAbsent=true&apiKey=d7229136ad094bbf8efa03382e544f03"
                        alt="Search Icon"
                        className="searchIcon"
                    />
                    <label htmlFor="searchInput" className="visually-hidden-search">
                        Search
                    </label>
                    <input
                        id="searchInput"
                        type="search"
                        placeholder="Search"
                        className="searchInput"
                        ref={searchInputRef}
                        maxLength="100"
                    />
                </div>
            </nav>
            <div className="actionIcons">
                <ActionIcon
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/cc1c948058fff07f7f797c30343efff5cac858cb39e3fb53caceac54a9b43578?placeholderIfAbsent=true&apiKey=d7229136ad094bbf8efa03382e544f03"
                    alt="Notification"
                />
                <ActionIcon
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/b290e1d2a4635178b617cbdf2c68a1a79da4c6a9b9909e45b661ceea8512ce59?placeholderIfAbsent=true&apiKey=d7229136ad094bbf8efa03382e544f03"
                    alt="Messages"
                    small
                />
                <ActionIcon
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/7584165f4d9ac92852f49a792ac45590118d4c019b0d1da91b7711ac9e5e46f3?placeholderIfAbsent=true&apiKey=d7229136ad094bbf8efa03382e544f03"
                    alt="Settings"
                />
                <ActionIcon
                    src={ProfileIcon} // Use the imported ProfileIcon image
                    alt="Profile Icon"
                    small
                    className="profileIcon" // Add your class for styling
                />
            </div>
        </div>
    );
};

export default SearchBar;

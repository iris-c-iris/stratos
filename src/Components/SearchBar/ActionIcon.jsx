import React from 'react';
import './SearchBar.css'; // Import your CSS file

const ActionIcon = ({ src, alt, small }) => {
    return (
        <img
            src={src}
            alt={alt}
            className={`actionIcon ${small ? 'smallActionIcon' : ''}`}
        />
    );
};

export default ActionIcon;

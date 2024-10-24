import React from 'react';
import './SmallCard.css';

const SmallCard = ({ title, value, icon, percentage }) => {
    return (
        <div className="card">
            <img src={icon} alt="" className="card-icon" />
            <div className="card-content">
                <h3 className="card-title">{title}</h3>
                <p className="card-value">{value}</p>
                {percentage && (
                    <p className="card-percentage">
                        <span className="percentage-value">{percentage}</span>
                        <span className="percentage-label">since last month</span>
                    </p>
                )}
            </div>
        </div>
    );
};

export default SmallCard;
import React from 'react';
import './LastScanned.css'; // Import your external CSS file
import barcode from '../Assets/barcode.png';


const LastScanned = () => {
    return (
        <section className="card">
            <img
                src={barcode}
                alt="Last Scanned"
                className="scanned_icon" />
            <div className="content">
                <h2 className="label">Last Scanned</h2>
                <p className="value">
                    <span className="visually-hidden">Last Scanned:</span>
                    RFID1234567890
                </p>
            </div>
        </section>
    );
};

export default LastScanned;

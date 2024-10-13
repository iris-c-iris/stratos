import React from 'react';
import './LastScanned.css'; // Import your external CSS file

const LastScanned = () => {
    return (
        <section className="card">
            <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e8a95ce3f846b56c74565352bbecfc8ca0bde08e5d02857a009b404d7b3e4046?placeholderIfAbsent=true&apiKey=d7229136ad094bbf8efa03382e544f03"
                alt="Last Scanned"
                className="scanned_icon"
            />
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

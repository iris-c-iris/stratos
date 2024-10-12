import React from "react";
import './UploadWidget.css'; // Import your external CSS file

function UploadWidget() {
    return (
        <section className="container">
            <div className="content">
                <div className="column">
                    <div className="uploadArea">
                        <img
                            loading="lazy"
                            src="https://cdn-icons-png.flaticon.com/512/1828/1828817.png"
                            className="uploadIcon"
                            alt="Upload icon"
                        />
                        <h2 className="uploadTitle">Add Inventory</h2>
                        <p className="uploadDescription">
                            Manual Inventory Input
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default UploadWidget;

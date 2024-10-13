import React from "react";
import './UploadWidget.css'; // Import your external CSS file
import plus from '../Assets/plus.png';


function UploadWidget() {
    return (
        <section className="uploadContainer">
            <div className="content">
                <div className="column">
                    <div className="uploadArea">
                        <img src={plus} alt="Upload Icon" className="uploadIcon"/>
                        <h2 className="uploadTitle">Add Inventory</h2>
                        <p className="uploadDescription">
                            Manually Add Inventory
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default UploadWidget;

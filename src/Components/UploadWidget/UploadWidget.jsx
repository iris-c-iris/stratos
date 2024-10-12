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
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7ba6908b5680e7a0554de4f5ede1175c5e94d99f7c885807ce5a28a873cd141c?placeholderIfAbsent=true&apiKey=d7229136ad094bbf8efa03382e544f03"
                            className="uploadIcon"
                            alt="Upload icon"
                        />
                        <h2 className="uploadTitle">Upload Files</h2>
                        <p className="uploadDescription">
                            PNG, JPG and GIF files are allowed
                        </p>
                    </div>
                </div>
                <div className="column">
                    <div className="profileInfo">
                        <h1 className="profileTitle">Complete your profile</h1>
                        <p className="profileDescription">
                            Stay on the pulse of distributed projects with an online whiteboard to plan, coordinate and discuss
                        </p>
                        <button className="publishButton">Publish now</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default UploadWidget;

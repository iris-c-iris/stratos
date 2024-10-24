import React from 'react';
import './CourseCta.css'; // Import the non-modular CSS

const CourseCta = () => {
    return (
        <section className="courseContainer">
            <div className="courseHeader">
                <div>
                    <span className="courseTag">Placeholder Title</span>
                    <h3 className="courseTitle">Placeholder</h3>
                </div>
            </div>
            <h2 className="courseHeadline">
                placeholder content
            </h2>

            <div className="courseActions">
                <button className="startButton">Get Started</button>
            </div>
        </section>
    );
};

export default CourseCta;

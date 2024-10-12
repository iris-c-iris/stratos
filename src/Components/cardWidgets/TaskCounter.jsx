import React from "react";
import './TaskCounter.css'; // Import your external CSS file

function TaskCounter() {
    return (
        <section className="taskCounter">
            <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d08a79b158bdc9afca8c9e90e957c0da16a84e3187faf010ca4e8e20695a8157?placeholderIfAbsent=true&apiKey=d7229136ad094bbf8efa03382e544f03"
                className="taskIcon"
                alt="Task icon"
            />
            <div className="taskInfo">
                <h2 className="taskLabel">New Tasks</h2>
                <p className="taskCount">154</p>
            </div>
        </section>
    );
}

export default TaskCounter;

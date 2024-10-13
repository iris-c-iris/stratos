import React from "react";
import './TaskCounter.css'; // Import your external CSS file
import task from '../Assets/task.png';


function TaskCounter() {
    return (
        <section className="taskCounter">
            <img
                src={task}
                alt="Task Icon"
                className="taskIcon"/>
            <div className="taskInfo">
                <h2 className="taskLabel">New Tasks</h2>
                <p className="taskCount">154</p>
            </div>
        </section>
    );
}

export default TaskCounter;

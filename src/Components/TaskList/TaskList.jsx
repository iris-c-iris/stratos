import React, { useState } from 'react';
import './TaskList.css'; // Import the non-modular CSS

const TaskList = () => {
    const [tasks, setTasks] = useState([
        { title: "Landing Page Design", status: "In Progress" },
        { title: "Dashboard Builder", status: "Done" },
        { title: "Mobile App Design", status: "In Progress" },
        { title: "Illustrations", status: "Pending" },
        { title: "Promotional LP", status: "In Progress" }
    ]);

    const handleCheckboxChange = (index) => {
        setTasks(prevTasks =>
            prevTasks.map((task, i) =>
                i === index ? { ...task, status: task.status === "Done" ? "In Progress" : "Done" } : task
            )
        );
    };

    return (
        <section className="taskContainer">
            <div className="taskHeader">
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/ba3b9cee4114aea6aab8c021449dfcd83ce444cefa694ca4a64d8767ca0bc155?placeholderIfAbsent=true&apiKey=d7229136ad094bbf8efa03382e544f03" alt="" className="taskIcon" />
                <h2 className="taskTitle">Tasks</h2>
            </div>
            <ul className="taskList">
                {tasks.map((task, index) => (
                    <li key={index} className="taskItem">
                        <input
                            type="checkbox"
                            checked={task.status === "Done"}
                            onChange={() => handleCheckboxChange(index)}
                            className="taskCheckbox"
                        />
                        <span className="taskName">{task.title}</span>
                        <span className={`taskStatus ${task.status.toLowerCase().replace(' ', '')}`}>
                            {task.status}
                        </span>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default TaskList;

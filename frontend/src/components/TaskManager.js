import React, { useState } from "react";
import './styles/styles.css';

function TaskManager() {
    const [tasks, setTasks] = useState([]);

    const handleAddTask = (event) => {
        if (event.key === 'Enter') {
            const taskInput = event.target;
            const newTask = taskInput.value.trim();
            if (newTask !== "") {
                setTasks([...tasks, { task: newTask, done: false }]);
                taskInput.value = "";
            }
        }
    };

    const handleTaskDone = (index) => {
        const updatedTasks = tasks.map((task, i) => {
            if (i === index) {
                return { ...task, done: true };
            }
            return task;
        });
        setTasks(updatedTasks);
    };

    const calculateTaskSummary = () => {
        const totalTasks = tasks.length;
        const completedTasks = tasks.filter(task => task.done).length;
        const pendingTasks = totalTasks - completedTasks;
        return { totalTasks, completedTasks, pendingTasks };
    };

    const { totalTasks, completedTasks, pendingTasks } = calculateTaskSummary();

    return (
        <div className="container">
            <div id="title">
                <h1 id="header">TASK MANAGER</h1>
            </div>
            <div id="form">
                <form>
                    <div className="form">
                        <label htmlFor="task">Task</label>
                        <textarea
                            id="task"
                            rows="10"
                            cols="50"
                            placeholder="Enter Your Task"
                            onKeyPress={handleAddTask}
                        ></textarea>
                    </div>
                </form>
            </div>

            <div>
                <ol>
                    {tasks.map((task, index) => (
                        <li key={index} style={{ textDecoration: task.done ? 'line-through' : 'none' }}>
                            {task.task}
                            {!task.done && <button onClick={() => handleTaskDone(index)}>DONE</button>}
                        </li>
                    ))}
                </ol>
            </div>

            <div className="Card">
                <div><p>TOTAL TASKS: {totalTasks}</p></div>
                <div><p>COMPLETED TASKS: {completedTasks}</p></div>
                <div><p>PENDING TASKS: {pendingTasks}</p></div>
            </div>
        </div>
    );
}

export default TaskManager;

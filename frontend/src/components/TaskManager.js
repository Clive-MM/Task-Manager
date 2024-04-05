import React, { useState } from "react";
import './styles/styles.css';


function TaskManager() {
    const [tasks, setTasks] = useState([]);

    const handleAddTask = (event) => {
        event.preventDefault();

        const taskInput = document.getElementById("task");
        const newTask = taskInput.value;
        if (newTask.trim() !== "") {
            setTasks([...tasks, { task: newTask, done: false }]);
            taskInput.value = "";
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
            <div>
                <form>
                    <div>
                        <label htmlFor="task">TASK</label>
                        <input
                            type="text"
                            id="task"
                            placeholder="Enter Your Task"
                        ></input>
                    </div>

                    <div>
                        <button type="button" className="btn btn-primary" onClick={handleAddTask}>ADD TASK</button>
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

            <div className="summary">
                <h3>SUMMARY</h3>
                <p>TOTAL TASKS: {totalTasks}</p>
                <p>COMPLETED TASKS: {completedTasks}</p>
                <p>PENDING TASKS: {pendingTasks}</p>
            </div>
        </div>
    );
}

export default TaskManager;

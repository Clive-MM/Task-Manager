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
            <div id="form">
                <form>
                    <div className="form">
                        <label htmlFor="task">Task</label>
                        <textarea
                            id="task"
                            rows="10" // Specify the number of visible rows
                            cols="50" // Specify the number of visible columns
                            placeholder="Enter Your Task"
                        ></textarea>
                    </div>


                    <div id="button">
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

            <div class="Card">
                <div><p>TOTAL TASKS: {totalTasks}</p></div>
                <div><p>COMPLETED TASKS: {completedTasks}</p></div>
                <div><p>PENDING TASKS: {pendingTasks}</p></div>
            </div>
        </div>
    );
}

export default TaskManager;

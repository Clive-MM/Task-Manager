import React from "react";


function TaskManager () {
    return(
        <div>   
            <div>
                <h1>TASK MANAGER</h1>
            </div>
            <div>
                <form>
                    <div>
                        <label htmlFor="task">TASK</label>
                        <input
                        type="task"
                        id="task"
                        placeholder="Enter Your Task"
                        ></input>
                    </div>

                    <div >
                        <button type="button" className="btn btn-primary">ADD TASK</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default TaskManager;
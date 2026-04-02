import React, { useState } from 'react';

function ToDoList() {

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");
    
    function handleInputChange(event){
        setNewTask(event.target.value);
    }

    function addTask(){
        setTasks(t => [...tasks, newTask]);
        setNewTask("");
    }

    function deleteTask(index){
        setTasks(t => tasks.filter((_, i) => i !== index));
    }

    function moveTaskUp(index){
        if (index > 0){
            const updateTasks = [...tasks];
            [updateTasks[index], updateTasks[index - 1]] = [updateTasks[index - 1], updateTasks[index]];
            setTasks(updateTasks);
        }
    }

    function moveTaskDown(index){
        if (index < tasks.length - 1){
            const updateTasks = [...tasks];
            [updateTasks[index], updateTasks[index + 1]] = [updateTasks[index + 1], updateTasks[index]];
            setTasks(updateTasks);
        }
    }

    return(
        <div className='to-do-list'>
            <h1>To-Do-List</h1>
            <div>
                <input 
                type = "text"
                placeholder = 'Enter a Task...'
                value = {newTask}
                onChange={handleInputChange}/>

                <button className='add-button' onClick={addTask}>Add</button>

                <ol>
                    {tasks.map((task, index) =>
                        <li key = {index}>
                            <span className='text'>{task}</span>
                            <button 
                                className='delete-button' 
                                onClick={() => deleteTask(index)}>
                                🗑️
                            </button>
                            <button 
                                className='move-button' 
                                onClick={() => moveTaskUp(index)}>
                                👆
                            </button>
                            <button 
                                className='move-button' 
                                onClick={() => moveTaskDown(index)}>
                                👇
                            </button>
                        </li>
                    )}
                </ol>
            </div>
        </div>
    )
}

export default ToDoList
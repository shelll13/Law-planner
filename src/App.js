import React from 'react';

const StudyTracker = () => {
    const [tasks, setTasks] = React.useState([]);
    const [task, setTask] = React.useState('');

    const addTask = () => {
        if (task) {
            setTasks([...tasks, task]);
            setTask('');
        }
    };

    return (
        <div>
            <h1>Study Tracker</h1>
            <input 
                type="text" 
                value={task} 
                onChange={(e) => setTask(e.target.value)}
                placeholder="Add a new task" 
            />
            <button onClick={addTask}>Add Task</button>
            <ul>
                {tasks.map((t, index) => (
                    <li key={index}>{t}</li>
                ))}
            </ul>
        </div>
    );
};

export default StudyTracker;

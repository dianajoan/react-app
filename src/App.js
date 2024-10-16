import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');
  
  const handleAddTask = (e) => {
    e.preventDefault();
    if (!task) return;

    setTasks([...tasks, task]);
    setTask('');
  };

  const handleDeleteTask = (index) => {
    const taskItem = document.querySelector(`.task-item:nth-child(${index + 1})`);
    
    if (taskItem) {
      taskItem.classList.add('fade-out');
      
      setTimeout(() => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
      }, 200); // Wait for the animation to finish before deleting
    }
  };

  const handleEditTask = (index) => {
    const newTask = prompt('Edit task:', tasks[index]);
    if (newTask) {
      const updatedTasks = tasks.map((task, i) => (i === index ? newTask : task));
      setTasks(updatedTasks);
    }
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <form onSubmit={handleAddTask}>
        <input 
          type="text" 
          value={task} 
          onChange={(e) => setTask(e.target.value)} 
          placeholder="Add a new task" 
        />
        <button type="submit">Add Task</button>
      </form>
      
      <div className="task-list">
        {tasks.map((task, index) => (
          <div key={index} className="task-item">
            <span>{task}</span>
            <div>
              <button onClick={() => handleEditTask(index)} className="action-button">
                <i className="fas fa-edit"></i> Edit
              </button>
              <button onClick={() => handleDeleteTask(index)} className="action-button">
                <i className="fas fa-trash"></i> Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

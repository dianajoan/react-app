import React, { useState } from "react";

function AddTask({ tasks, setTasks }) {
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim()) {
      const task = {
        id: Date.now(),
        text: newTask,
      };
      setTasks([...tasks, task]);
      setNewTask(""); // Clear input after adding task
    }
  };

  return (
    <div>
      <h2>Add Task</h2>
      <input
        type="text"
        placeholder="Enter new task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>
    </div>
  );
}

export default AddTask;

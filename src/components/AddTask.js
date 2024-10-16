import React, { useState } from "react";

const AddTask = ({ tasks, setTasks }) => {
  const [task, setTask] = useState("");

  const handleAddTask = (e) => {
    e.preventDefault();
    if (task) {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  return (
    <div>
      <h2>Add Task</h2>
      <form onSubmit={handleAddTask}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter task"
          required
        />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default AddTask;

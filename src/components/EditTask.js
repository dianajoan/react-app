import React, { useState, useEffect } from "react";

const EditTask = ({ tasks, setTasks, taskToEdit }) => {
  const [task, setTask] = useState("");

  useEffect(() => {
    if (taskToEdit !== null) {
      setTask(tasks[taskToEdit]);
    }
  }, [taskToEdit, tasks]);

  const handleEditTask = (e) => {
    e.preventDefault();
    if (taskToEdit !== null) {
      const updatedTasks = [...tasks];
      updatedTasks[taskToEdit] = task;
      setTasks(updatedTasks);
    }
    setTask("");
  };

  return (
    <div>
      <h2>Edit Task</h2>
      <form onSubmit={handleEditTask}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Edit task"
          required
        />
        <button type="submit">Update Task</button>
      </form>
    </div>
  );
};

export default EditTask;

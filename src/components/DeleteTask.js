import React from "react";

function DeleteTask({ tasks, setTasks }) {
  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h2>Delete Task</h2>
      <div>
        {tasks.length === 0 ? (
          <p>No tasks available</p>
        ) : (
          tasks.map((task) => (
            <div key={task.id}>
              <span>{task.text}</span>
              <button onClick={() => deleteTask(task.id)}>Delete</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default DeleteTask;

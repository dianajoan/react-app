import React, { useState } from "react";

function EditTask({ tasks, setTasks }) {
  const [editTaskId, setEditTaskId] = useState(null);
  const [editTask, setEditTask] = useState("");

  const selectTaskToEdit = (taskId, taskText) => {
    setEditTaskId(taskId);
    setEditTask(taskText);
  };

  const updateTask = () => {
    const updatedTasks = tasks.map((task) =>
      task.id === editTaskId ? { ...task, text: editTask } : task
    );
    setTasks(updatedTasks);
    setEditTaskId(null);
    setEditTask("");
  };

  return (
    <div>
      <h2>Edit Task</h2>
      <div>
        {tasks.length === 0 ? (
          <p>No tasks available</p>
        ) : (
          tasks.map((task) => (
            <div key={task.id}>
              {editTaskId === task.id ? (
                <>
                  <input
                    type="text"
                    value={editTask}
                    onChange={(e) => setEditTask(e.target.value)}
                  />
                  <button onClick={updateTask}>Update</button>
                </>
              ) : (
                <>
                  <span>{task.text}</span>
                  <button onClick={() => selectTaskToEdit(task.id, task.text)}>
                    Edit
                  </button>
                </>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default EditTask;

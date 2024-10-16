import React from "react";

const TaskList = ({ tasks, onEdit, onDelete }) => {
  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className="task-item">
            {task}
            <button onClick={() => onEdit(index)} className="action-button">Edit</button>
            <button onClick={() => onDelete(index)} className="action-button">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;

import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import AddTask from "./components/AddTask";
import EditTask from "./components/EditTask";
import DeleteTask from "./components/DeleteTask";
import './App.css'; // Make sure to import the CSS file

function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <div className="App">
      <h1>React CRUD To-Do List</h1>

      {/* Navigation Buttons */}
      <div className="nav-buttons">
        <Link to="/add" className="nav-button">Add Task</Link>
        <Link to="/edit" className="nav-button">Edit Task</Link>
        <Link to="/delete" className="nav-button">Delete Task</Link>
      </div>

      {/* Routing for different components */}
      <Routes>
        <Route path="/add" element={<AddTask tasks={tasks} setTasks={setTasks} />} />
        <Route path="/edit" element={<EditTask tasks={tasks} setTasks={setTasks} />} />
        <Route path="/delete" element={<DeleteTask tasks={tasks} setTasks={setTasks} />} />
      </Routes>
    </div>
  );
}

export default App;

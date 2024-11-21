import React, { useState } from "react";
import "../Styles/Tasks.css";

const Tasks = () => {
  const [tasks, setTasks] = useState([
    "follow up call needed",
    "contact the local authority",
    "Book in another meeting",
    "Speak to the GP about XYZ",
    "you need to call her about ...",
    "Submission deadline",
  ]);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask.trim() === "") return;
    setTasks([...tasks, newTask]);
    setNewTask("");
  };

  return (
    <div className="tasks-container">
      <div className="header">
        <h2 className="tasks-title">Tasks</h2>
        <div className="task-status">
          <button className="status-btn">25 To Do</button>
          <button className="status-btn done">43 Done</button>
        </div>
        <button className="filters-btn">Filters</button>
      </div>
      <div className="search-container">

</div>

      <div className="task-input">
        <input
          type="text"
          placeholder="Add your next task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={handleAddTask} className="save-task-btn">
          Save Task
        </button>
      </div>

      <div className="task-list">
     
        {tasks.map((task, index) => (
          <div className="task-item" key={index}>
            
              <span>{task}</span>
            
            <div className="task-left">
              <input type="checkbox" className="task-checkbox" /></div>
            <button className="task-settings-btn">⚙️</button>
          </div>
        ))}
      </div>

      <div className="pagination">

        <button className="prev-btn">← Previous</button>
        <button className="next-btn">Next →</button>
      </div>
    </div>
  );
};

export default Tasks;

import React, { useState } from "react";
import "../Styles/RightPanel.css";
import Boards from "./Boards";
import PersonalProgress from "./PersonalProgress";
import Tasks from "./Tasks";

function RightPanel() {
 
  const [tasks, setTasks] = useState([
    "Follow up call needed",
    "Contact for lead conversion",
    "Book in teacher meeting",
    "Speak to the GP about XYZ",
    "Approval call for events",
    "Submission deadline",
  ]);

  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  return (
//     <div >
     

      
//       <Boards/>
//       <PersonalProgress/>
// <Tasks/>

     
//     </div>
<div className="right-panel-container">
  <Boards className="component-spacing" />
  <PersonalProgress className="component-spacing" />
  <Tasks className="component-spacing" />
</div>

  );
}

export default RightPanel;

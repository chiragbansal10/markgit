import React from "react";
import "../Styles/Boards.css";
import contact from '../contact.jpg';
const Boards = () => {
  const boards = [
    { id: 1, name: "Angola Production", logo: contact },
    { id: 2, name: "Attendance Reporting", logo: contact },
    { id: 3, name: "CHIVA RYH", logo: contact },
  ];

  return (
    <div className="boards-container">
      <div className="boards-header">
        <h2>Boards</h2>
        <button className="new-board-button">+ New Board</button>
      </div>
      <div className="search-container">

      </div>
      <ul className="boards-list">
        {boards.map((board) => (
          <li key={board.id} className="board-item">
            <img
              src={board.logo}
              alt={`${board.name} logo`}
              className="board-logo"
            />
            <span className="board-name">{board.name}</span>
          </li>
        ))}
      </ul>
      <button className="show-all-button">Show All</button>
    </div>
  );
};

export default Boards;

import React from 'react';
import '../Styles/PersonalProgress.css';

const PersonalProgress = () => {
  const progressData = [
    { id: 1, color: 'orange', label: 'Are either of your parents living?', value: 7 },
    { id: 2, color: 'blue', label: 'Do you belong to any groups in which...', value: 6 },
    { id: 3, color: 'red', label: '1-2-1 Events', value: 27 },
  ];

  return (
    <div className="personal-progress-container">
      <div className="header">
        <h3>Personal Progress</h3>
        <a href="#" className="go-to-board">Go to board</a>
      </div>
      <div className="progress-list">
        {progressData.map((item) => (
          <div key={item.id} className="progress-item">
            <div className="circle" style={{ backgroundColor: item.color }}></div>
            <div className="progress-details">
              <p>{item.label}</p>
              <div className="progress-bar-container">
                <div
                  className="progress-bar"
                  style={{ width: `${item.value}%`, backgroundColor: item.color }}
                ></div>
                <span className="progress-value">{item.value}</span>
              </div>
            </div>
            <button className="add-button">+</button>
          </div>
        ))}
      </div>
      <div className="footer1">
        <a href="#" className="show-all">Show All</a>
      </div>
    </div>
  );
};

export default PersonalProgress;

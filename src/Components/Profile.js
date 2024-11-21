import React from "react";
import "../Styles/Profile.css";

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="card-header">
          <h2>El Comando</h2>
          <button className="action-btn">Follow</button>
        </div>
        <div className="card-body">
          <img
            src="https://placehold.co/50x50"
            alt="Profile"
            className="profile-img"
          />
          <p>0 followers</p>
        </div>
      </div>

      <div className="profile-card">
        <div className="card-header">
          <h2>Projects</h2>
          <button className="action-btn">New Project</button>
        </div>
        <ul className="projects-list">
          <li>
            <img src="https://placehold.co/30x30" alt="Project" />
            <span>Project 1</span>
          </li>
          <li>
            <img src="https://placehold.co/30x30" alt="Project" />
            <span>Project 2</span>
          </li>
          <li>
            <img src="https://placehold.co/30x30" alt="Project" />
            <span>Project 3</span>
          </li>
        </ul>
      </div>

      <div className="profile-card">
        <div className="card-header">
          <h2>Organizations</h2>
          <button className="action-btn">New Organization</button>
        </div>
        <ul className="projects-list">
          <li>
            <img src="https://placehold.co/30x30" alt="Organization" />
            <span>Organization 1</span>
          </li>
          <li>
            <img src="https://placehold.co/30x30" alt="Organization" />
            <span>Organization 2</span>
          </li>
        </ul>
      </div>

      <div className="profile-card">
        <h2>Contributions</h2>
        <div className="card-body">
          <img
            src="https://placehold.co/50x50"
            alt="Contribution"
            className="profile-img"
          />
          <div>
            <p>Contribution 1</p>
            <p className="description">Description of contribution 1</p>
          </div>
        </div>
      </div>

      <div className="profile-card">
        <h2>Followers</h2>
        <div className="follower-avatars">
          {[...Array(7)].map((_, i) => (
            <img
              key={i}
              src="https://placehold.co/30x30"
              alt={`Follower ${i + 1}`}
              className="avatar"
            />
          ))}
        </div>
      </div>

      <div className="profile-card">
        <h2>People You Follow</h2>
        <div className="follower-avatars">
          {[...Array(9)].map((_, i) => (
            <img
              key={i}
              src="https://placehold.co/30x30"
              alt={`Person ${i + 1}`}
              className="avatar"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;

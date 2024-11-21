import React from "react";
import "../Styles/Followers.css";
import contact from '../contact.jpg';
import folower from '../follower.jpg';
import folower1 from '../follower1.jpg';
import folower2 from '../folower2.jpg';
import folower3 from '../folower3.jpg';

const Followers = () => {
  const followers = [
    { name: "User 1", image:contact },
    { name: "User 2", image: contact },
    { name: "User 3", image:  folower},
    { name: "User 4", image: folower1 },
    { name: "User 5", image: folower2 },
    { name: "User 5", image: folower3 },
  ];

  return (
    <div className="followers-container">
      <h2>Followers</h2>
      <div className="followers-list">
        {followers.map((follower, index) => (
          <div key={index} className="follower">
            <img
              src={follower.image}
              alt={follower.name}
              className="follower-image"
            />
          </div>
        ))}
      </div>
      <button className="show-all-button">Show All</button>
    </div>
  );
};

export default Followers;

// import React from "react";
// import "..//Styles/Organization.css";

// const Organization = () => {
  

//   return (
//     <div className="container">
//       <h2 className="title">Organisations</h2>
//       <div className="organisation-list">
//         <div className="organisation">
//           <img
//             src="https://placehold.co/50x50"
//             alt="Logo of The Young People's Charity"
//             className="organisation-logo"
//           />
//           <div className="organisation-info">
//             <p className="organisation-name">An Organisation Demo</p>
//             <p className="organisation-role">Admin</p>
//           </div>
//           <i className="fas fa-cog settings-icon"></i>
//         </div>
//         <div className="organisation">
//           <img
//             src="https://placehold.co/50x50"
//             alt="Logo of A Showcase International Development Education Charity"
//             className="organisation-logo"
//           />
//           <div className="organisation-info">
//             <p className="organisation-name">
//               A Showcase International Development Education Charity
//             </p>
//             <p className="organisation-role">Member</p>
//           </div>
//         </div>
//         <div className="organisation">
//           <img
//             src="https://placehold.co/50x50"
//             alt="Logo of Oak Tree Secondary School"
//             className="organisation-logo"
//           />
//           <div className="organisation-info">
//             <p className="organisation-name">Oak Tree Secondary School</p>
//             <p className="organisation-role">Admin</p>
//           </div>
//           <i className="fas fa-cog settings-icon"></i>
//         </div>
//       </div>
//       <div className="show-all">
//         <a href="#">Show All</a>
//       </div>
//     </div>
//   );
// };

// export default Organization;
// import React from "react";
// import "../Styles/Organization.css";
// import contact from '../contact.jpg';
// const Organizations = () => {
//   const organizations = [
//     {
//       name: "An Organisation Demo",
//       role: "Admin",
//      imgSrc: contact
//     },
//     {
//       name: "A Showcase International Development Education Charity",
//       role: "Member",
//       imgSrc: "🌍", // Replace with appropriate icon or image path
//     },
//     {
//       name: "Oak Tree Secondary School",
//       role: "Admin",
//       imgSrc: "🌳", // Replace with appropriate icon or image path
//     },
//   ];

//   return (
//     <div className="organizations-container">
//       <h2>Organisations</h2>
//       <ul className="organization-list">
//         {organizations.map((org, index) => (
//           <li key={index} className="organization-item">
//             <div className="organization-icon">{org.imgSrc}</div>
//             <div className="organization-details">
//               <p className="organization-name">{org.name}</p>
//               <p className="organization-role">{org.role}</p>
//             </div>
//             <div className="settings-icon">⚙️</div>
//           </li>
//         ))}
//       </ul>
//       <button className="show-all-button">Show All</button>
//     </div>
//   );
// };

// export default Organizations;
import React from "react";
import "../Styles/Organization.css";
import organization from '../organization.jpg';
import oak from '../oak.jpg';
import show from '../showcase.jpg';
const Organizations = () => {
  const organizations = [
    {
      name: "An Organisation Demo",
      role: "Admin",
      imgSrc: organization,
    },
    {
      name: "A Showcase International Development Education Charity",
      role: "Member",
      imgSrc: show, // Replace with another image path if required
    },
    {
      name: "Oak Tree Secondary School",
      role: "Admin",
      imgSrc: oak, // Replace with another image path if required
    },
  ];

  return (
    <div className="organizations-container">
      <h2>Organisations</h2>
      <ul className="organization-list">
        {organizations.map((org, index) => (
          <li key={index} className="organization-item">
            <div className="organization-icon">
              <img src={org.imgSrc} alt={`${org.name} logo`} className="organization-img" />
            </div>
            <div className="organization-details">
              <p className="organization-name">{org.name}</p>
              <p className="organization-role">{org.role}</p>
            </div>
            <div className="settings-icon">⚙️</div>
          </li>
        ))}
      </ul>
      <button className="show-all-button">Show All</button>
    </div>
  );
};

export default Organizations;


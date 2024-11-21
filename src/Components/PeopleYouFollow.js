// import React from "react";
// import "../Styles/PeopleYouFollow.css";
// import people from '../people.jpg';
// import people1 from '../people1.jpg';
// import people2 from '../people2.jpg';
// import people3 from '../people3.jpg';
// import people4 from '../people4.jpg';
// import people5 from '../people5.jpg';
// const PeopleYouFollow = () => {
//   const people = [
//     { name: "Person 1", image: people },
//     { name: "Person 2", image: people1 },
//     { name: "Person 3", image: people2 },
//     { name: "Person 4", image: people3 },
//     { name: "Person 5", image: people4 },
//     { name: "Person 6", image: people5 },
//   ];

//   return (
//     <div className="people-you-follow-container">
//       <h2>People You Follow</h2>
//       <div className="people-list">
//         {people.map((person, index) => (
//           <div key={index} className="person">
//             <img
//               src={person.image}
//               alt={person.name}
//               className="person-image"
//             />
//           </div>
//         ))}
//       </div>
//       <button className="show-all-button">Show All</button>
//     </div>
//   );
// };

// export default PeopleYouFollow;
import React from "react";
import "../Styles/PeopleYouFollow.css";
import peopleImg from '../people.jpg';
import peopleImg1 from '../people1.jpg';
import peopleImg2 from '../people2.jpg';
import peopleImg3 from '../people3.jpg';
import peopleImg4 from '../people4.jpg';
import peopleImg5 from '../people5.jpg';

const PeopleYouFollow = () => {
  const peopleList = [
    { name: "Person 1", image: peopleImg },
    { name: "Person 2", image: peopleImg1 },
    { name: "Person 3", image: peopleImg2 },
    { name: "Person 4", image: peopleImg3 },
    { name: "Person 5", image: peopleImg4 },
    { name: "Person 6", image: peopleImg5 },
  ];

  return (
    <div className="people-you-follow-container">
      <h2>People You Follow</h2>
      <div className="search-container">

</div>
      <div className="people-list">
        {peopleList.map((person, index) => (
          <div key={index} className="person">
            <img
              src={person.image}
              alt={person.name}
              className="person-image"
            />
            <p>{person.name}</p>
          </div>
        ))}
      </div>
      <button className="show-all-button">Show All</button>
    </div>
  );
};

export default PeopleYouFollow;

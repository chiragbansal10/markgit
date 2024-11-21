// // // import React from "react";
// // // import "../Styles/Projects.css";

// // // const Projects = () => {
// // //   const projects = [
// // //     { name: "4359 test", imgSrc: "path/to/image1.png" },
// // //     { name: "a test 5146", imgSrc: "path/to/image2.png" },
// // //     { name: "A Training Project", imgSrc: "path/to/image3.png" },
// // //   ];

// // //   return (
// // //     <div className="projects-container">
// // //       <div className="projects-header">
// // //         <h3>Projects</h3>
// // //         <button className="new-project-btn">+ New Project</button>
// // //       </div>

// // //       <div className="projects-list">
// // //         {projects.map((project, index) => (
// // //           <div className="project-item" key={index}>
// // //             <div className="project-img">
// // //               <img src={project.imgSrc} alt={project.name} />
// // //             </div>
// // //             <span>{project.name}</span>
// // //             <button className="settings-btn">⚙️</button>
// // //           </div>
// // //         ))}
// // //       </div>

// // //       <div className="show-all">
// // //         <button>Show All</button>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Projects;
// // import React from "react";
// // import "..//Styles/Projects.css";

// // const Projects = () => {
// //   const projects = [
// //     { name: "4359 test", imgSrc: "path/to/image1.png" },
// //     { name: "a test 5146", imgSrc: "path/to/image2.png" },
// //     { name: "A Training Project", imgSrc: "path/to/image3.png" },
// //   ];

// //   return (
// //     <div className="projects-container">
// //       <div className="projects-header">
// //         <h3>Projects</h3>
// //         <button className="new-project-btn">+ New Project</button>
// //       </div>

// //       <div className="projects-list">
// //         {projects.map((project, index) => (
// //           <div className="project-item" key={index}>
// //             <div className="project-img">
// //               <img src={project.imgSrc} alt={project.name} />
// //             </div>
// //             <span>{project.name}</span>
// //             <button className="settings-btn">⚙️</button>
// //           </div>
// //         ))}
// //       </div>

// //       <div className="show-all">
// //         <button>Show All</button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Projects;
// import React from "react";
// import "..//Styles/Projects.css";

// const Projects = ({ projects = [] }) => {
//   return (
//     <div className="projects-container">
//       <div className="projects-header">
//         <h3>Projects</h3>
//         <button className="new-project-btn">+ New Project</button>
//       </div>

//       <div className="projects-list">
//         {projects.map((project, index) => (
//           <div className="project-item" key={index}>
//             <div className="project-img">
//               <img src={project.imgSrc} alt={project.name} />
//             </div>
//             <span>{project.name}</span>
//             <button className="settings-btn">⚙️</button>
//           </div>
//         ))}
//       </div>

//       <div className="show-all">
//         <button>Show All</button>
//       </div>
//     </div>
//   );
// };

// export default Projects;
import React from "react";
import "../Styles/Projects.css";


const Projects = ({ data }) => {
  const { projects, newProject,project } = data;

  return (
    <div className="projects-container">
      <div className="projects-header">
        <h3>{project.head}</h3>
        <button className="new-project-btn">+ {newProject.name}</button>
      </div>

      <div className="projects-list">
        {projects.map((project, index) => (
          <div className="project-item" key={index}>
            <div className="project-img">
              <img src={project.imgSrc} alt={project.name} />
            </div>
            <span>{project.name}</span>
            <button className="settings-btn">⚙️</button>
          </div>
        ))}
      </div>

      <div className="show-all">
        <button>Show All</button>
      </div>
    </div>
  );
};

export default Projects;
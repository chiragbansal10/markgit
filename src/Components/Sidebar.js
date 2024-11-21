import React from "react";
import "../Styles/Sidebar.css";
import Contacts from "./Contacts";
import Projects from "./Projects";
import Organization from "./Organization";
import Followers from "./Followers";
import PeopleYouFollow from "./PeopleYouFollow";
import project from '../project.jpg';
import contact from '../contact.jpg';
import big from '../big.jpg';
// const projects = [
//   { name: "4359 test", imgSrc: "path/to/image1.png" },
//   { name: "a test 5146", imgSrc: "path/to/image2.png" },
//   { name: "A Training Project", imgSrc: "path/to/image3.png" },
// ];
const sidebarData = {
  projects: [
    { name: "4359 test", imgSrc: project },
    { name: "a test 5146", imgSrc: project },
    { name: "A Training Project", imgSrc: project },
  ],
  newProject: {
    name: "New Project",
    imgSrc: "path/to/new-project-image.png",
  },
  project:{
    head: "Projects",
  }
};
const album = {
  projects: [
    { name: "2021 Portfolio", imgSrc: contact },
    { name: "All Partners", imgSrc: contact },
    { name: "Big Lottery Fund", imgSrc: big },
  ],
  newProject: {
    name: "New Album",
    imgSrc: "path/to/new-project-image.png",
  },
  project:{
    head: "Albums",
  }
};
const Sidebar = () => {

  return (
    <div>
      {/* Section: EC Connects */}
      <div className="sidebar-section">
        {/* <h3>EC Connects</h3>
        <div className="connect-item">
          <div className="icon-placeholder">🔒</div>
          <span>Connect</span>
        </div> */}
        <Contacts/>
      </div>

      {/* Section: Projects */}
      <div className="sidebar-section">
        {/* <h3>Projects</h3>
        <div className="project-list">
          <div className="project-item">
            <div className="icon-placeholder">📁</div>
            <span>Project 1</span>
          </div>
          <div className="project-item">
            <div className="icon-placeholder">📁</div>
            <span>Project 2</span>
          </div>
        </div> */}
        <Projects data={sidebarData} />
      </div>
      <div className="sidebar-section">
        {/* <h3>Projects</h3>
        <div className="project-list">
          <div className="project-item">
            <div className="icon-placeholder">📁</div>
            <span>Project 1</span>
          </div>
          <div className="project-item">
            <div className="icon-placeholder">📁</div>
            <span>Project 2</span>
          </div>
        </div> */}
        <Projects data={album} />
      </div>
      <div className="sidebar-section">
        {/* <h3>Projects</h3>
        <div className="project-list">
          <div className="project-item">
            <div className="icon-placeholder">📁</div>
            <span>Project 1</span>
          </div>
          <div className="project-item">
            <div className="icon-placeholder">📁</div>
            <span>Project 2</span>
          </div>
        </div> */}
        <Organization/>
      </div>
      <div className="sidebar-section">
        {/* <h3>Projects</h3>
        <div className="project-list">
          <div className="project-item">
            <div className="icon-placeholder">📁</div>
            <span>Project 1</span>
          </div>
          <div className="project-item">
            <div className="icon-placeholder">📁</div>
            <span>Project 2</span>
          </div>
        </div> */}
        <Followers/>
      </div>
      <div className="sidebar-section">
        {/* <h3>Projects</h3>
        <div className="project-list">
          <div className="project-item">
            <div className="icon-placeholder">📁</div>
            <span>Project 1</span>
          </div>
          <div className="project-item">
            <div className="icon-placeholder">📁</div>
            <span>Project 2</span>
          </div>
        </div> */}
        <PeopleYouFollow/>
      </div>

     
     
    </div>
  );
};

export default Sidebar;

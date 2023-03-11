import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import { Link } from 'react-router-dom';

import '../../components/progressbar/style.css';
import EmpNavbar from './emp.navbar';
import './emp.projects.page.css';

const EmpProjects = () => {
  // Fake values for displaying rows in this page until back-end is ready
  const projects = [
    { projectId: 1, pName: 'Project1', description: 'Brief Description', progressbar: 80 },
    { projectId: 2, pName: 'Project2', description: 'Brief Description', progressbar: 30 },
    { projectId: 3, pName: 'Project3', description: 'Brief Description', progressbar: 90 },
  ];

  // listRows will contain the arrays below
  const listRows = [];
  // add project rows to the listRows
  for (let i = 0; i < projects.length; i++) {
    listRows.push(
      <div className='row'>
        {/* From "projectId" it leads to the right link */}
        <Link to={`/employee/projects/${projects[i].projectId}`}>{projects[i].pName}</Link>
        <p>{projects[i].description}</p>
        <div className='progressbar'>
          <CircularProgressbar
            value={projects[i].progressbar}
            text={`${projects[i].progressbar}%`}
          />
        </div>
      </div>,
    );
  }

  return (
    <div>
      {/* call employee navbar */}
      <EmpNavbar />
      <ul className='body'>{listRows}</ul>
    </div>
  );
};

export default EmpProjects;

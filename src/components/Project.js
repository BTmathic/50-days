import React from 'react';
import Project1 from './Project1';
import Project2 from './Project2';
import { history } from '../routers/AppRouter';

export default class Project extends React.Component {
  render() {
    const page = history.location.pathname.split('/projects/')[1];
    const projects = [Project1, Project2];
    const ProjectPage = projects[page-1];
    return (
      <div className='project-page'>
        <ProjectPage title={'Bear Cub'} />
        <div className='project-page--buttons'>
          { page != 1 && <div onClick={() => history.push(`/projects/${parseInt(page)-1}`)}>Prev</div> }
          <div onClick={() => history.push('/')}>Back</div>
          { page != 50 && <div onClick={() => history.push(`/projects/${parseInt(page)+1}`)}>Next</div> }
        </div>
      </div>
    );
  }
}
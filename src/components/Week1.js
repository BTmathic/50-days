import React from 'react';
import Project1 from './Project1';
import Project2 from './Project2';
import Project3 from './Project3';
import Project4 from './Project4';
import Project5 from './Project5';

export default () => (
  <div className='week'>
    <h2>Week 1</h2>
    <div className='week__projects'>
      <Project1 title={'Bear Cub'} />
      <Project2 title={'Elephant'} />
      <Project3 title={'Beaver'} />
      <Project4 title={'Tiger'} />
      <Project5 title={'Dory (Finding Nemo)'} />
    </div>
  </div>
);
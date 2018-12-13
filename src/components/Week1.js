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
      <Project1 title={'Bear Cub'} number={1} container={'bear'} />
      <Project2 title={'Elephant'} number={2} container={'elephant'} />
      <Project3 title={'Beaver'} number={3} container={'beaver'} />
      <Project4 title={'Tiger'} number={4} container={'tiger'} />
      <Project5 title={'Dory (Finding Nemo)'} number={5} container={'dory'} />
    </div>
  </div>
);
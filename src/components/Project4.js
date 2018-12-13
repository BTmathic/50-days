import React from 'react';
import { history } from '../routers/AppRouter';

export default (props) => (
  <div className='project project--full'>
    <h3>{props.title}</h3>
    <div className={'project--container project--container-tiger'}
      onClick={() => {
        history.push('/projects/4')
        return false;
      }}
    >
      Proj{props.number}!
    </div>
  </div>
);
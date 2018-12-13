import React from 'react';
import { history } from '../routers/AppRouter';

export default (props) => (
  <div className='project project--full'>
    <h3>{props.title}</h3>
    <div className={`project--container project--container-dory`}
      onClick={() => {
        history.push(`/projects/${props.number}}`)
        return false;
      }}
    >
      Proj{props.number}!
    </div>
  </div>
);
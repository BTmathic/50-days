import React from 'react';
import { history } from '../routers/AppRouter';

export default (props) => (
  <div className='project project--full'>
    <h3>{props.title}</h3>
    <div className={'project--container project--container-beaver'}
      onClick={() => {
        history.push('/projects/3')
        return false;
      }}
    >
      <div className='beaver-container'>
        <div className='beaver'>
  
          <div className="beaver--body">
            <div className='beaver--body-copy'></div>

            <div className='beaver--left-ear'></div>
            <div className='beaver--right-ear'></div>
            <div className='beaver--left-eye'>
              <div className='beaver--left-pupil'></div>
            </div>
            <div className='beaver--right-eye'>
              <div className='beaver--right-pupil'></div>
            </div>
            <div className='beaver--nose'></div>
            <div className='beaver--left-mouth'></div>
            <div className='beaver--right-mouth'></div>
            <div className='beaver--left-tooth'></div>
            <div className='beaver--right-tooth'></div>
            
            <div className='beaver--left-arm'></div>
            <div className='beaver--right-arm'></div>
            
            <div className='beaver--bottom-body'>
              <div className='beaver--tail'></div>
              <div className='beaver--left-mark-one'></div>
              <div className='beaver--left-mark-two'></div>
              <div className='beaver--right-mark-one'></div>
              <div className='beaver--right-mark-two'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
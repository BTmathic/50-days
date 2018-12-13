import React from 'react';
import { history } from '../routers/AppRouter';

export default (props) => (
  <div className='project project--full'>
    <h3>{props.title}</h3>
    <div className='project--container project--container-bear'
      onClick={() => {
        history.push(`/projects/${props.number}}`)
        return false;
      }}
    >
      <div className='bear'>
        <div className='bear--head'>
          <div className='bear--head-copy'></div>

          <div className='bear--left-ear'>
            <div className='bear--inner-ear'></div>
          </div>
          <div className='bear--right-ear'>
            <div className='bear--inner-ear'></div>
          </div>

          <div className='bear--left-eye'>
            <div className='bear--pupil'></div>
          </div>
          <div className='bear--right-eye'>
            <div className='bear--pupil'></div>
          </div>

          <div className='bear--muzzle'>
            <div className='bear--nose'>
              <div className='bear--left-nostril'></div>
              <div className='bear--right-nostril'></div>
            </div>
          </div>
        </div>

        <div className='bear--body'>
          <div className='bear--body-copy'></div>
          <div className='bear--left-arm'>
            <div className='bear--left-paw'></div>
          </div>
          <div className='bear--right-arm'>
            <div className='bear--right-paw'></div>
          </div>
        </div>

      </div>
    </div>
  </div>
);
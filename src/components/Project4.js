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
      <div className='container'>
        <div className='head'>
          <div className='head-copy'></div>
          <div className='left-ear'></div>
          <div className='right-ear'></div>
          <div className='left-eye'></div>
          <div className='left-eyebrow'></div>
          <div className='right-eye'></div>
          <div className='right-eyebrow'></div>
          <div className='mouth'>
            <div className='mouth-copy'></div>
            <div className='nose'></div>
            <div className='open-mouth'></div>
            <div className='left-mouth'>
              <div className='fang'></div>
            </div>
            <div className='right-mouth'>
              <div className='fang'></div>
            </div>
          </div>
          <div className='top-stripe-one'></div>
          <div className='top-stripe-two'></div>
          <div className='left-stripe-one'></div>
          <div className='left-stripe-two'></div>
          <div className='right-stripe-one'></div>
          <div className='right-stripe-two'></div>
        </div>
        
        <div className='body'>
          <div className='body-copy'></div>
          <div className='front-left-leg'>
            <div className='left-leg-stripe-one'></div>
            <div className='left-leg-stripe-two'></div>
          </div>
          <div className='front-right-leg'>
            <div className='left-leg-stripe-one'></div>
            <div className='left-leg-stripe-two'></div>
          </div>
          <div className='rear-left-leg'>
            <div className='right-leg-stripe-one'></div>
            <div className='right-leg-stripe-two'></div>
          </div>
          <div className='rear-right-leg'>
            <div className='right-leg-stripe-two'></div>
          </div>
          <div className='body-top-stripe-one'></div>
          <div className='body-top-stripe-two'></div>
          <div className='body-top-stripe-three'></div>
          <div className='tail'>
            <div className='outer-tail'>
              <div className='tail-right-stripe-one'></div>
              <div className='tail-right-stripe-two'></div>
            </div>
            <div className='inner-tail'>
              <div className='tail-left-stripe-one'></div>
              <div className='tail-left-stripe-two'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
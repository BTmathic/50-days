import React from 'react';
import { history } from '../routers/AppRouter';

export default (props) => (
  <div className='project project--full'>
    <h3>{props.title}</h3>
    <div className={'project--container project--container-elephant'}
      onClick={() => {
        history.push('/projects/2')
        return false;
      }}
    >
      <div className='elephant'>
        <div className='elephant--back-bump'></div>
        <div className='elephant--body'>
          <div className='elephant--body-copy'></div>
          <div className='elephant--back-left-foot'>
            <div className='elephant--lower-back-left-foot'></div>
          </div>
          <div className='elephant--back-right-foot'>
            <div className='elephant--lower-back-right-foot'></div>
          </div>
          <div className='elephant--front-left-foot'></div>
          <div className='elephant--front-right-foot'></div>
          <div className='elephant--head'>
            <div className='elephant--head-copy'></div>
            <div className='elephant--left-ear'></div>
            <div className='elephant--right-ear'></div>
            <div className='elephant--eye'></div>
            <div className='elephant--trunk'>
              <div className='elephant--trunk-copy'></div>
              <div className='elephant--top-trunk'></div>
              <div className='elephant--mid-trunk'></div>
              <div className='elephant--bot-trunk'></div>
            </div>
          </div>
          <div className='elephant--tail'>
            <div className='elephant--tail-copy'></div>
            <div className='elephant--tail-top'></div>
            <div className='elephant--tail-bot'></div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
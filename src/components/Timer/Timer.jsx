import React from 'react';
import { useStopwatch } from 'react-timer-hook'
import {PlayCircleOutlined, PauseCircleOutlined, RetweetOutlined} from '@ant-design/icons'
import './timer.css'
function MyTimer() {
    const {
      seconds,
      minutes,
      start,
      pause,
      reset,
    } = useStopwatch({ autoStart: false });
  
  
    return (
      <div className = 'timer'>
        <div  className = 'timer_elem'>
          <span className = 'new-todo-form__timer'>{minutes}m</span>:<span className = 'new-todo-form__timer'>{seconds}s</span>
        </div>
      <div className = 'buttons'>
      <PlayCircleOutlined onClick={start}/>
      <PauseCircleOutlined onClick={pause}/>
      <RetweetOutlined onClick={reset}/>
      </div>
    </div>
  );
}
  export default function Timer() {
    return (
        <MyTimer  />
    );
  }
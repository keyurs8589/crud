import React, { useState } from 'react';
import Btn from './Btn';

import '../styles/DisplayTask.css';

const DisplayTask = () => {
  const [ary, setAry] = useState([
    { a: 1, b: 'Todo Task 1' },
    { a: 2, b: 'Todo Task 2' },
    { a: 3, b: 'Todo Task 3' },
    { a: 4, b: 'Todo Task 4' },
    { a: 5, b: 'Todo Task 5' },
  ]);
  return (
    <div className='display_task container'>
      {ary.map((el) => (
        <div className='p-1 row' index={ary.index}>
          <div className='col-1 sr_task'>{el.a}.</div>{' '}
          <div className='col-7 sr_task'>{el.b}</div>
          <Btn className='col-2' btnColor='success' text='Update' />
          <Btn className='col-2' btnColor='danger' text='Delete' />
        </div>
      ))}
    </div>
  );
};

export default DisplayTask;

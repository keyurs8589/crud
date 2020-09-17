import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import Btn from './Btn';
import '../styles/DisplayTask.css';

const DisplayTask = ({ toDos }) => {
  const [toDoList, setToDoList] = useState([]);
  useEffect(() => {
    setToDoList(toDos);
  }, [toDos]);
  return (
    <div className='display_task container'>
      {toDoList.map((toDo, index) => (
        <div className='p-1 row' key={index}>
          <div className='col-1 sr_task'>{index + 1}.</div>{' '}
          <div className='col-7 sr_task'>{toDo}</div>
          <Btn className='col-2' btnColor='success' text='Update' />
          <Btn className='col-2' btnColor='danger' text='Delete' />
          <hr className='w-100' />
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    toDos: state.toDos,
  };
};

export default connect(mapStateToProps, null)(DisplayTask);

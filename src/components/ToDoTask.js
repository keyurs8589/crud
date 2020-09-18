import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import Btn from './Btn';
import '../styles/DisplayTask.css';
import { deleteToDo, updateToDo } from '../redux/crudAction';

const ToDoTask = ({ toDos, deleteToDo, updateToDo }) => {
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
          <Btn
            className='col-2'
            btnColor='success'
            text='Update'
            action={updateToDo}
            toDo={toDo}
          />
          <Btn
            className='col-2'
            btnColor='danger'
            text='Delete'
            action={deleteToDo}
            toDo={toDo}
          />
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

const mapDispatchToProps = (dispatch) => {
  return {
    deleteToDo: (toDo) => dispatch(deleteToDo(toDo)),
    updateToDo: (updatedToDo, toDo) => dispatch(updateToDo(updatedToDo, toDo)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDoTask);

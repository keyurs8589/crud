import React, { useState } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import { connect } from 'react-redux';

import '../styles/AddTask.css';
import { createToDo } from '../redux/crudAction';

const AddTask = ({ createToDo }) => {
  const [toDo, setToDo] = useState('');

  const toDoText = (e) => {
    setToDo(e.target.value);
  };

  const createClearToDo = () => {
    createToDo(toDo);
    setToDo('');
  };

  return (
    <InputGroup size='lg' className='add_task'>
      <FormControl
        placeholder='Create To Do Task'
        value={toDo}
        onChange={toDoText}
      />
      <InputGroup.Append>
        <Button onClick={createClearToDo} variant='outline-secondary'>
          +
        </Button>
      </InputGroup.Append>
    </InputGroup>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    createToDo: (toDo) => dispatch(createToDo(toDo)),
  };
};

export default connect(null, mapDispatchToProps)(AddTask);

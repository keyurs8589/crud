import React from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';

import '../styles/AddTask.css';

const AddTask = () => {
  return (
    <InputGroup size='lg' className='add_task'>
      <FormControl placeholder='Create To Do Task' />
      <InputGroup.Append>
        <Button variant='outline-secondary'>+</Button>
      </InputGroup.Append>
    </InputGroup>
  );
};

export default AddTask;

import React from 'react';
import { Button } from 'react-bootstrap';

const Btn = ({ btnColor, text, action, toDo }) => {
  const actionOnToDoTask = () => {
    action(toDo);
  };
  return (
    <Button onClick={actionOnToDoTask} className='mr-2' variant={btnColor}>
      {text}
    </Button>
  );
};

export default Btn;

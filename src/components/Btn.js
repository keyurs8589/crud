import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import UpdateModal from './UpdateModal';

const Btn = ({ btnColor, text, action, toDo }) => {
  const [show, setShow] = useState(false);
  const handleClose = (updatedToDo) => {
    setShow(false);
    if (updatedToDo && toDo !== updatedToDo) {
      action(updatedToDo, toDo);
    }
  };
  const handleShow = () => setShow(true);

  const actionOnToDoTask = () => {
    if (text === 'Update') {
      handleShow();
    } else if (text === 'Delete') action(toDo);
  };
  return (
    <div>
      <Button onClick={actionOnToDoTask} className='mr-2' variant={btnColor}>
        {text}
      </Button>
      <UpdateModal show={show} handleClose={handleClose} toDo={toDo} />
    </div>
  );
};

export default Btn;

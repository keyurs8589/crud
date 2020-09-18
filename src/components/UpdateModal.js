import React, { useState } from 'react';
import { Modal, Button, FormControl } from 'react-bootstrap';

const UpdateModal = ({ show, handleClose, toDo }) => {
  const [updatedToDo, setUpdatedToDo] = useState(toDo);

  const updatatingToDoTask = (e) => {
    setUpdatedToDo(e.target.value);
  };
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Update ToDo Task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Original Task: {toDo}
        <FormControl
          placeholder='Update Task here'
          value={updatedToDo}
          onChange={updatatingToDoTask}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={() => handleClose(toDo)}>
          Close
        </Button>
        <Button variant='primary' onClick={() => handleClose(updatedToDo)}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default UpdateModal;

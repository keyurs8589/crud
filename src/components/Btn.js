import React from 'react';
import { Button } from 'react-bootstrap';

const Btn = ({ btnColor, text }) => {
  return (
    <Button className='mr-2' variant={btnColor}>
      {text}
    </Button>
  );
};

export default Btn;

import React from 'react';

import Heading from './components/Heading';
import SubHeading from './components/SubHeading';
import AddTask from './components/AddTask';
import DisplayTask from './components/DisplayTask';

const App = () => {
  return (
    <div className='d-flex flex-column'>
      <Heading text='crud operation demo' />
      <SubHeading text='- to do list -' />
      <AddTask />
      <DisplayTask />
    </div>
  );
};

export default App;

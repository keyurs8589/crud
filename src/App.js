import React from 'react';
import { Provider } from 'react-redux';

import Heading from './components/Heading';
import SubHeading from './components/SubHeading';
import AddTask from './components/AddTask';
import ToDoTask from './components/ToDoTask';
import store from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <div className='d-flex flex-column'>
        <Heading text='crud operation demo' />
        <SubHeading text='- to do list -' />
        <AddTask />
        <ToDoTask />
      </div>
    </Provider>
  );
};

export default App;

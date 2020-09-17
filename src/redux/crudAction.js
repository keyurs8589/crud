import { CREATE_TODO, UPDATE_TODO, DELETE_TODO } from './crudType';

export const createToDo = (toDo) => {
  return {
    type: CREATE_TODO,
    payload: toDo,
  };
};

export const deleteToDo = (toDo) => {
  return {
    type: DELETE_TODO,
    payload: toDo,
  };
};

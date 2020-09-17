import { CREATE_TODO, READ_TODO, UPDATE_TODO, DELETE_TODO } from './crudType';

export const createToDo = (toDo) => {
  return {
    type: CREATE_TODO,
    payload: toDo,
  };
};

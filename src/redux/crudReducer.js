import { CREATE_TODO, UPDATE_TODO, DELETE_TODO } from './crudType';

const initialState = {
  toDos: [],
};

const crudReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TODO:
      return { ...state, toDos: [...state.toDos, action.payload] };

    case DELETE_TODO:
      return {
        ...state,
        toDos: state.toDos.filter((toDo) => toDo !== action.payload),
      };

    default:
      return state;
  }
};

export default crudReducer;

import { CREATE_TODO, UPDATE_TODO, DELETE_TODO } from './crudType';

const initialState = {
  toDos: [],
};

const crudReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TODO:
      return { ...state, toDos: [...state.toDos, action.payload] };

    case UPDATE_TODO:
      let toDoUpdate = state.toDos.map((toDo) => {
        if (toDo === action.payload.toDo) {
          return action.payload.updatedToDo;
        } else return toDo;
      });

      return {
        ...state,
        toDos: toDoUpdate,
      };

    case DELETE_TODO:
      let toDoFilter = state.toDos.filter((toDo) => toDo !== action.payload);
      return {
        ...state,
        toDos: toDoFilter,
      };

    default:
      return state;
  }
};

export default crudReducer;

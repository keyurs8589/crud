import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import crudReducer from './crudReducer';

const store = createStore(crudReducer, applyMiddleware(thunk));
export default store;

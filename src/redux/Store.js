import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reducerRegister, reducerLogin } from './reducers/AccountReducers';

const reducers = combineReducers({
    reducerRegister,
    reducerLogin
});

const Store = createStore(reducers, applyMiddleware(thunk));

export default Store;
import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reducerRegister } from './reducers/UserReducers';

const reducers = combineReducers({
    reducerRegister
});

const Store = createStore(reducers, applyMiddleware(thunk));

export default Store;
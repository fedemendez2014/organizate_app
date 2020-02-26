import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reducerRegister, reducerLogin } from './reducers/AccountReducers';
import { reducerService } from './reducers/ServiceReducers';

const reducers = combineReducers({
    reducerRegister,
    reducerLogin,
    reducerService
});

const Store = createStore(reducers, applyMiddleware(thunk));

export default Store;
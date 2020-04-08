import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reducerRegister, reducerLogin } from './reducers/AccountReducers';
import { reducerService, reducerServiceGets } from './reducers/ServiceReducers';
import { reducerCustomer, reducerCustomerGets } from './reducers/CustomerReducers';
import { reducerIncomeEgress, reducerIncomeEgressGets } from './reducers/IncomeEgressReducers';

const reducers = combineReducers({
    reducerRegister,
    reducerLogin,
    reducerService,
    reducerServiceGets,
    reducerCustomer,
    reducerCustomerGets,
    reducerIncomeEgress,
    reducerIncomeEgressGets
});

const Store = createStore(reducers, applyMiddleware(thunk));

export default Store;
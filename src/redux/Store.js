import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reducerRegister, reducerLogin } from './reducers/AccountReducers';
import { reducerService, reducerServiceGets } from './reducers/ServiceReducers';
import { reducerCustomer, reducerCustomerGets } from './reducers/CustomerReducers';
import { reducerIncomeEgress, reducerIncomeEgressGets } from './reducers/IncomeEgressReducers';
import { reducerScheduleGets } from './reducers/ScheduleReducers';

const reducers = combineReducers({
    reducerRegister,
    reducerLogin,
    reducerService,
    reducerServiceGets,
    reducerCustomer,
    reducerCustomerGets,
    reducerIncomeEgress,
    reducerIncomeEgressGets,
    reducerScheduleGets
});

const Store = createStore(reducers, applyMiddleware(thunk));

export default Store;
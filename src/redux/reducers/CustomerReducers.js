import { ActionsConstants } from "../../Constants";

const initialStateCustomer = {
    statusUpdate: null,
    statusAdd: null,
    statusDelete: null,
    messageError: '',
    loading: false
};

export const reducerCustomer = (state = initialStateCustomer, action) => {
    switch (action.type) {
        case ActionsConstants.ACTIONS_CUSTOMER_LOADING:
            return { ...initialStateCustomer, loading: true }
        case ActionsConstants.ADD_CUSTOMER_SUCCESS:
            return { ...state, loading: false, statusAdd: true };
        case ActionsConstants.ADD_CUSTOMER_ERROR:
            return { ...state, loading: false, statusAdd: false, messageError: action.data.messageError };
        case ActionsConstants.UPDATE_CUSTOMER_SUCCESS:
            return { ...state, loading: false, statusUpdate: true };
        case ActionsConstants.UPDATE_CUSTOMER_ERROR:
            return { ...state, loading: false, statusUpdate: false, messageError: action.data.messageError };
        case ActionsConstants.DELETE_CUSTOMER_SUCCESS:
            return { ...state, loading: false, statusDelete: true }
        case ActionsConstants.DELETE_CUSTOMER_ERROR:
            return { ...state, loading: false, statusDelete: false, messageError: action.data.messageError }
        default:
            return state;
    }
};

const initialStateCustomerGets = {
    customers: [],
    pages: 0,
    messageError: '',
    loading: false
};

export const reducerCustomerGets = (state = initialStateCustomerGets, action) => {
    switch (action.type) {
        case ActionsConstants.GET_CUSTOMERS_LOADING:
            return { ...initialStateCustomerGets, loading: true };
        case ActionsConstants.GET_ALL_CUSTOMER_SUCCESS:
            return { ...state, loading: false, customers: action.data.customers.data, pages: action.data.customers.count };
        case ActionsConstants.GET_ALL_CUSTOMER_ERROR:
            return { ...state, loading: false, messageError: action.data.messageError };
        default:
            return state;
    }
};
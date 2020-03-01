import { ActionsConstants } from "../../Constants";

const initalStateCustomer = {
    customers: [],
    customer: [],
    statusUpdate: null,
    statusAdd: null,
    statusGet: null,
    statusGetAll: null,
    statusDelete: null,
    messageError: ''
};

export const reducerCustomer = (state = {}, action) => {
    switch (action.type) {
        case ActionsConstants.ADD_CUSTOMER_SUCCESS:
            return { ...initalStateCustomer, statusAdd: true };
        case ActionsConstants.ADD_CUSTOMER_ERROR:
            return { ...state, statusAdd: false, messageError: action.data.messageError };
        case ActionsConstants.UPDATE_CUSTOMER_SUCCESS:
            return { ...initalStateCustomer, statusUpdate: true };
        case ActionsConstants.UPDATE_CUSTOMER_ERROR:
            return { ...state, statusUpdate: false, messageError: action.data.messageError };
        case ActionsConstants.GET_CUSTOMER_SUCCESS:
            return { ...state, statusGet: true };
        case ActionsConstants.GET_CUSTOMER_ERROR:
            return { ...state, statusGet: false, messageError: action.data.messageError };
        case ActionsConstants.GET_ALL_CUSTOMER_SUCCESS:
            return { ...state, statusGetAll: true, customers: action.data.customers };
        case ActionsConstants.GET_ALL_CUSTOMER_ERROR:
            return { ...state, statusGetAll: false, messageError: action.data.messageError };
        case ActionsConstants.DELETE_CUSTOMER_SUCCESS:
            return { ...initalStateCustomer, statusDelete: true }
        case ActionsConstants.DELETE_CUSTOMER_ERROR:
            return { ...initalStateCustomer, statusDelete: false, messageError: action.data.messageError }
        default:
            return state;
    }
};
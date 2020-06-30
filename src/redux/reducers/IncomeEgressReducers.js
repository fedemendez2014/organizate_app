import { ActionsConstants } from "../../Constants";
import { combineReducers } from 'redux';

const initialStateIncomeEgressGets = {
    objects: [],
    statusGet: null,
    statusGetAll: null,
    messageError: '',
    pages: 0,
    loading: false
};

export const reducerIncomeEgressGets = (state = initialStateIncomeEgressGets, action) => {
    switch (action.type) {
        case ActionsConstants.GET_INCOME_EGRESS_LOADING:
            return { ...initialStateIncomeEgressGets, loading: true };
        case ActionsConstants.GET_ALL_INCOME_EGRESS_SUCCESS:
            return { ...state, loading: false, statusGetAll: true, objects: action.data.objects, pages: action.data.count };
        case ActionsConstants.GET_ALL_INCOME_EGRESS_ERROR:
            return { ...state, loading: false, statusGetAll: false, messageError: action.data.messageError };
        default:
            return state;
    }
};

const initialStateIncomeEgress = {
    statusUpdate: null,
    statusAdd: null,
    statusDelete: null,
    messageError: '',
    loading: false
};

export const reducerIncomeEgress = (state = initialStateIncomeEgress, action) => {
    switch (action.type) {
        case ActionsConstants.ACTIONS_INCOME_EGRESS_LOADING:
            return { ...initialStateIncomeEgress, loading: true };
        case ActionsConstants.ADD_INCOME_EGRESS_SUCCESS:
            return { ...state, loading: false, statusAdd: true };
        case ActionsConstants.ADD_INCOME_EGRESS_ERROR:
            return { ...state, loading: false, statusAdd: false, messageError: action.data.messageError };
        case ActionsConstants.UPDATE_INCOME_EGRESS_SUCCESS:
            return { ...state, loading: false, statusUpdate: true };
        case ActionsConstants.UPDATE_INCOME_EGRESS_ERROR:
            return { ...state, loading: false, statusUpdate: false, messageError: action.data.messageError };
        case ActionsConstants.DELETE_INCOME_EGRESS_SUCCESS:
            return { ...state, loading: false, statusDelete: true }
        case ActionsConstants.DELETE_INCOME_EGRESS_ERROR:
            return { ...state, loading: false, statusDelete: false, messageError: action.data.messageError }
        default:
            return state;
    }
}
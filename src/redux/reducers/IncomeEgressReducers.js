import { ActionsConstants } from "../../Constants";
import { combineReducers } from 'redux';

const initalStateIncomeEgressGets = {
    objects: [],
    object: [],
    statusGet: null,
    statusGetAll: null,
    messageError: ''
};

export const reducerIncomeEgressGets = (state = initalStateIncomeEgressGets, action) => {
    switch (action.type) {
        case ActionsConstants.GET_INCOME_EGRESS_SUCCESS:
            return { ...initalStateIncomeEgress, statusGet: true };
        case ActionsConstants.GET_INCOME_EGRESS_ERROR:
            return { ...initalStateIncomeEgress, statusGet: false, messageError: action.data.messageError };
        case ActionsConstants.GET_ALL_INCOME_EGRESS_SUCCESS:
            return { ...initalStateIncomeEgress, statusGetAll: true, objects: action.data.objects };
        case ActionsConstants.GET_ALL_INCOME_EGRESS_ERROR:
            return { ...initalStateIncomeEgress, statusGetAll: false, messageError: action.data.messageError };
        default:
            return state;
    }
};

const initalStateIncomeEgress = {
    statusUpdate: null,
    statusAdd: null,
    statusGet: null,
    statusDelete: null,
    messageError: ''
};

export const reducerIncomeEgress = (state = initalStateIncomeEgress, action) => {
    switch (action.type) {
        case ActionsConstants.ADD_INCOME_EGRESS_SUCCESS:
            return { ...state, statusAdd: true };
        case ActionsConstants.ADD_INCOME_EGRESS_ERROR:
            return { ...state, statusAdd: false, messageError: action.data.messageError };
        case ActionsConstants.UPDATE_INCOME_EGRESS_SUCCESS:
            return { ...state, statusUpdate: true };
        case ActionsConstants.UPDATE_INCOME_EGRESS_ERROR:
            return { ...state, statusUpdate: false, messageError: action.data.messageError };
        case ActionsConstants.DELETE_INCOME_EGRESS_SUCCESS:
            return { ...state, statusDelete: true }
        case ActionsConstants.DELETE_INCOME_EGRESS_ERROR:
            return { ...state, statusDelete: false, messageError: action.data.messageError }
        default:
            return state;
    }
}
import { ActionsConstants } from "../../Constants";

const initalStateIncomeEgress = {
    objects: [],
    object: [],
    statusUpdate: null,
    statusAdd: null,
    statusGet: null,
    statusGetAll: null,
    statusDelete: null,
    messageError: ''
};

export const reducerIncomeEgress = (state = {}, action) => {
    switch (action.type) {
        case ActionsConstants.ADD_INCOME_EGRESS_SUCCESS:
            return { ...initalStateIncomeEgress, statusAdd: true };
        case ActionsConstants.ADD_INCOME_EGRESS_ERROR:
            return { ...state, statusAdd: false, messageError: action.data.messageError };
        case ActionsConstants.UPDATE_INCOME_EGRESS_SUCCESS:
            return { ...initalStateIncomeEgress, statusUpdate: true };
        case ActionsConstants.UPDATE_INCOME_EGRESS_ERROR:
            return { ...state, statusUpdate: false, messageError: action.data.messageError };
        case ActionsConstants.GET_INCOME_EGRESS_SUCCESS:
            return { ...state, statusGet: true };
        case ActionsConstants.GET_INCOME_EGRESS_ERROR:
            return { ...state, statusGet: false, messageError: action.data.messageError };
        case ActionsConstants.GET_ALL_INCOME_EGRESS_SUCCESS:
            return { ...state, statusGetAll: true, objects: action.data.objects };
        case ActionsConstants.GET_ALL_INCOME_EGRESS_ERROR:
            return { ...state, statusGetAll: false, messageError: action.data.messageError };
        case ActionsConstants.DELETE_INCOME_EGRESS_SUCCESS:
            return { ...initalStateIncomeEgress, statusDelete: true }
        case ActionsConstants.DELETE_INCOME_EGRESS_ERROR:
            return { ...initalStateIncomeEgress, statusDelete: false, messageError: action.data.messageError }
        default:
            return state;
    }
};
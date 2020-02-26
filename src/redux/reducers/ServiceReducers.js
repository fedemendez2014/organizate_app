import { ActionsConstants } from "../../Constants";

const initalStateService = {
    services: [],
    service: [],
    statusUpdate: null,
    statusAdd: null,
    statusGet: null,
    statusGetAll: null,
    messageError: ''
};

export const reducerService = (state = {}, action) => {
    switch (action.type) {
        case ActionsConstants.ADD_SERVICE_SUCCESS:
            return { ...state, statusAdd: true };
        case ActionsConstants.ADD_SERVICE_ERROR:
            return { ...state, statusAdd: false, messageError: action.data.messageError };
        case ActionsConstants.UPDATE_SERVICE_SUCCESS:
            return { ...state, statusUpdate: true };
        case ActionsConstants.UPDATE_SERVICE_ERROR:
            return { ...state, statusUpdate: false, messageError: action.data.messageError };
        case ActionsConstants.GET_SERVICE_SUCCESS:
            return { ...state, statusGet: true };
        case ActionsConstants.GET_SERVICE_ERROR:
            return { ...state, statusGet: false, messageError: action.data.messageError };
        case ActionsConstants.GET_ALL_SERVICE_SUCCESS:
            return { ...state, statusGetAll: true };
        case ActionsConstants.GET_ALL_SERVICE_ERROR:
            return { ...state, statusGetAll: false, messageError: action.data.messageError };
        default:
            return state;
    }
};
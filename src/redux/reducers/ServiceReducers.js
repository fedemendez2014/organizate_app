import { ActionsConstants } from "../../Constants";

const initalStateService = {
    services: [],
    service: [],
    statusUpdate: null,
    statusAdd: null,
    statusGet: null,
    statusGetAll: null,
    statusDelete: null,
    messageError: ''
};

export const reducerService = (state = {}, action) => {
    switch (action.type) {
        case ActionsConstants.ADD_SERVICE_SUCCESS:
            return { ...initalStateService, statusAdd: true };
        case ActionsConstants.ADD_SERVICE_ERROR:
            return { ...state, statusAdd: false, messageError: action.data.messageError };
        case ActionsConstants.UPDATE_SERVICE_SUCCESS:
            return { ...initalStateService, statusUpdate: true };
        case ActionsConstants.UPDATE_SERVICE_ERROR:
            return { ...state, statusUpdate: false, messageError: action.data.messageError };
        case ActionsConstants.GET_SERVICE_SUCCESS:
            return { ...state, statusGet: true };
        case ActionsConstants.GET_SERVICE_ERROR:
            return { ...state, statusGet: false, messageError: action.data.messageError };
        case ActionsConstants.GET_ALL_SERVICE_SUCCESS:
            return { ...state, statusGetAll: true, services: action.data.services };
        case ActionsConstants.GET_ALL_SERVICE_ERROR:
            return { ...state, statusGetAll: false, messageError: action.data.messageError };
        case ActionsConstants.DELETE_SERVICE_SUCCESS:
            return { ...initalStateService, statusDelete: true }
        case ActionsConstants.DELETE_SERVICE_ERROR:
            return { ...initalStateService, statusDelete: false, messageError: action.data.messageError }
        default:
            return state;
    }
};
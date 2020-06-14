import { ActionsConstants } from "../../Constants";

const initialStateService = {
    statusUpdate: null,
    statusAdd: null,
    statusDelete: null,
    messageError: '',
    loading: false
};

export const reducerService = (state = initialStateService, action) => {
    switch (action.type) {
        case ActionsConstants.ACTIONS_SERVICE_LOADING:
            return { ...initialStateService, loading: true };
        case ActionsConstants.ADD_SERVICE_SUCCESS:
            return { ...state, loading: false, statusAdd: true };
        case ActionsConstants.ADD_SERVICE_ERROR:
            return { ...state, loading: false, statusAdd: false, messageError: action.data.messageError };
        case ActionsConstants.UPDATE_SERVICE_SUCCESS:
            return { ...state, loading: false, statusUpdate: true };
        case ActionsConstants.UPDATE_SERVICE_ERROR:
            return { ...state, loading: false, statusUpdate: false, messageError: action.data.messageError };
        case ActionsConstants.DELETE_SERVICE_SUCCESS:
            return { ...state, loading: false, statusDelete: true }
        case ActionsConstants.DELETE_SERVICE_ERROR:
            return { ...state, loading: false, statusDelete: false, messageError: action.data.messageError }
        default:
            return state;
    }
};

const initialStateServiceGets = {
    services: [],
    messageError: '',
    loading: false,
    pages: 0
};

export const reducerServiceGets = (state = initialStateServiceGets, action) => {
    switch (action.type) {
        case ActionsConstants.GET_SERVICE_LOADING:
            return { ...initialStateServiceGets, loading: true };
        case ActionsConstants.GET_ALL_SERVICE_SUCCESS:
            return { ...state, loading: false, services: action.data.services.data, pages: action.data.services.count };
        case ActionsConstants.GET_ALL_SERVICE_ERROR:
            return { ...state, loading: false, messageError: action.data.messageError };
        default:
            return state;
    }
};
import { ActionsConstants } from "../../Constants";

export const reducerRegister = (state = {}, action) => {
    return state;
};

export const reducerLogin = (state = { session: null }, action) => {
    switch (action.type) {
        case ActionsConstants.LOGIN_SUCCESS:
            return { ...state, session: action.data };
        case ActionsConstants.USER_LOGOUT_SUCCESS:
            return { session: null }
        default:
            return state;
    }
};
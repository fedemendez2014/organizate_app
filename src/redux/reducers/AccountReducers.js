import { ActionsConstants } from "../../Constants";

export const reducerRegister = (state = {}, action) => {
    return state;
};

export const reducerLogin = (state = {}, action) => {
    switch(action.type){
        case ActionsConstants.LOGIN_SUCCESS:
            return {...state, session: action.data};
        default:
            return state;
    }
};
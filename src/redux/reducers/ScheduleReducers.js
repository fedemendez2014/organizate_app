import { ActionsConstants } from "../../Constants";

const initalStateGets = {
    scheduleList: [],
    messageError: ''
};

export const reducerScheduleGets = (state = initalStateGets, action) => {
    switch (action.type) {
        case ActionsConstants.GET_SCHEDULE_SUCCESS:
            console.log({ ...state, scheduleList: action.data.scheduleList, messageError: '' })
            return { ...state, scheduleList: action.data.scheduleList, messageError: '' };
        case ActionsConstants.GET_SCHEDULE_ERROR:
            return { ...state, scheduleList: [], messageError: action.data.messageError };
        default:
            return state;
    }
};

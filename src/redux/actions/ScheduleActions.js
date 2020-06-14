import { ActionsConstants } from '../../Constants';
import { GetScheduleList } from '../services/ScheduleServices';
import { actionUserSessionClose } from './AccountActions';

/**
 * GET SCHEDULE LIST 
 */
export const actionGetScheduleList = (data) => {
    return dispatch => {
        const oResult = GetScheduleList(data);
        oResult.then(
            oSuccess => {
                dispatch(actionGetScheduleListSuccess({
                    scheduleList: oSuccess.data
                }));
            },
            oError => {
                if(oError.response.status === 401){
                    dispatch(actionUserSessionClose());
                }
                dispatch(actionGetScheduleListError({
                    messageError: oError.response.data
                }))
            }
        )
    }
}

export const actionGetScheduleListSuccess = (data) => ({
    type: ActionsConstants.GET_SCHEDULE_SUCCESS,
    data: data
})

export const actionGetScheduleListError = (data) => ({
    type: ActionsConstants.GET_SCHEDULE_ERROR,
    data: data
})
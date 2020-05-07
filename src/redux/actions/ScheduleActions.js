import { ActionsConstants } from '../../Constants';
import { GetScheduleList } from '../services/ScheduleServices';

/**
 * GET SCHEDULE LIST 
 */
export const actionGetScheduleList = (data) => {
    return dispatch => {
        const oResult = GetScheduleList(data);
        oResult.then(
            oSuccess => {
                console.log(oSuccess)
                dispatch(actionGetScheduleListSuccess({
                    scheduleList: oSuccess.data
                }));
            },
            oError => {
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
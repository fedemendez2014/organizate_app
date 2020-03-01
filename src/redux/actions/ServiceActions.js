import { ActionsConstants } from '../../Constants';
import { AddService, GetAllService, UpdateService } from '../services/ServiceServices';

/**
 * ADD SERVICES 
 */
export const actionAddService = (data) => {
    return dispatch => {
        const oResult = AddService(data);
        oResult.then(
            oSuccess => {
                dispatch(actionAddServiceSuccess());
            },
            oError => {
                dispatch(actionAddServiceError({
                    messageError: oError.response.data
                }))
            }
        )
    }
}

export const actionAddServiceSuccess = () => ({
    type: ActionsConstants.ADD_SERVICE_SUCCESS
})

export const actionAddServiceError = (data) => ({
    type: ActionsConstants.ADD_SERVICE_ERROR,
    data: data
})

/**
 * UPDATE SERVICES 
 */
export const actionUpdateService = (data) => {
    return dispatch => {
        const oResult = UpdateService(data);
        oResult.then(
            oSuccess => {
                dispatch(actionUpdateServiceSuccess());
            },
            oError => {
                dispatch(actionUpdateServiceError({
                    messageError: oError.response.data
                }))
            }
        )
    }
}

export const actionUpdateServiceSuccess = () => ({
    type: ActionsConstants.UPDATE_SERVICE_SUCCESS
})

export const actionUpdateServiceError = (data) => ({
    type: ActionsConstants.UPDATE_SERVICE_ERROR,
    data: data
})

/**
 * GET ALL SERVICES 
 */
export const actionGetAllService = (data) => {
    return dispatch => {
        const oResult = GetAllService(data);
        oResult.then(
            oSuccess => {
                dispatch(actionGetAllServiceSuccess({
                    services: oSuccess.services
                }))
            },
            oError => {
                dispatch(actionGetAllServiceError({
                    messageError: oError.response.data
                }))
            }
        )
    }
}

export const actionGetAllServiceSuccess = (data) => ({
    type: ActionsConstants.GET_ALL_SERVICE_SUCCESS,
    data: data
})

export const actionGetAllServiceError = (data) => ({
    type: ActionsConstants.GET_ALL_SERVICE_ERROR,
    data: data
})
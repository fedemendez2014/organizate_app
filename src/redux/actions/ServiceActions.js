import { ActionsConstants } from '../../Constants';
import { AddService, GetAllService, UpdateService, DeleteService } from '../services/ServiceServices';
import { actionUserSessionClose } from './AccountActions';

/**
 * ADD SERVICES 
 */
export const actionAddService = (data) => {
    return dispatch => {
        dispatch(actionActionsServiceLoading());
        const oResult = AddService(data);
        oResult.then(
            oSuccess => {
                dispatch(actionAddServiceSuccess());
                dispatch(actionGetAllService({
                    token: data.token,
                    page: 1
                }));
            },
            oError => {
                if (oError.response.status === 401) {
                    dispatch(actionUserSessionClose());
                }
                dispatch(actionAddServiceError({
                    messageError: oError.response.data.message
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
        dispatch(actionActionsServiceLoading());
        const oResult = UpdateService(data);
        oResult.then(
            oSuccess => {
                dispatch(actionUpdateServiceSuccess());
                dispatch(actionGetAllService({
                    token: data.token,
                    page: 1
                }));
            },
            oError => {
                if (oError.response.status === 401) {
                    dispatch(actionUserSessionClose());
                }
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
        if (data.loading) {
            dispatch(actionGetAllServiceLoading());
        }
        const oResult = GetAllService(data);
        oResult.then(
            oSuccess => {
                dispatch(actionGetAllServiceSuccess({
                    services: oSuccess.services
                }))
            },
            oError => {
                if (oError.response.status === 401) {
                    dispatch(actionUserSessionClose());
                }
                dispatch(actionGetAllServiceError({
                    messageError: oError.response.data
                }))
            }
        )
    }
}

export const actionGetAllServiceLoading = () => ({
    type: ActionsConstants.GET_SERVICE_LOADING
})

export const actionGetAllServiceSuccess = (data) => ({
    type: ActionsConstants.GET_ALL_SERVICE_SUCCESS,
    data: data
})

export const actionGetAllServiceError = (data) => ({
    type: ActionsConstants.GET_ALL_SERVICE_ERROR,
    data: data
})

/**
 * DELETE SERVICE ACTIONS
 */
export const actionDeleteService = (data) => {
    return dispatch => {
        dispatch(actionActionsServiceLoading());
        const oResult = DeleteService(data);
        oResult.then(
            oSuccess => {
                dispatch(actionDeleteServiceSuccess());
                dispatch(actionGetAllService({
                    token: data.token,
                    page: 1
                }));
            },
            oError => {
                if (oError.response.status === 401) {
                    dispatch(actionUserSessionClose());
                }
                dispatch(actionDeleteServiceError({
                    messageError: oError.response.data.message
                }))
            }
        )
    }
}

export const actionDeleteServiceSuccess = () => ({
    type: ActionsConstants.DELETE_SERVICE_SUCCESS
})

export const actionDeleteServiceError = (data) => ({
    type: ActionsConstants.DELETE_SERVICE_ERROR,
    data: data
})

/**
 * GLOBAL SERVICE ACTIONS
 */
export const actionActionsServiceLoading = () => ({
    type: ActionsConstants.ACTIONS_SERVICE_LOADING
})
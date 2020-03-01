import { ActionsConstants } from '../../Constants';
import { AddIncomeEgress, UpdateIncomeEgress } from '../services/IncomeEgressServices';

/**
 * ADD INCOME EGRESS 
 */
export const actionAddIncomeEgress = (data) => {
    return dispatch => {
        const oResult = AddIncomeEgress(data);
        oResult.then(
            oSuccess => {
                dispatch(actionAddIncomeEgressSuccess());
            },
            oError => {
                dispatch(actionAddIncomeEgressError({
                    messageError: oError.response.data
                }))
            }
        )
    }
}

export const actionAddIncomeEgressSuccess = () => ({
    type: ActionsConstants.ADD_INCOME_EGRESS_SUCCESS
})

export const actionAddIncomeEgressError = (data) => ({
    type: ActionsConstants.ADD_INCOME_EGRESS_ERROR,
    data: data
})

/**
 * UPDATE INCOME EGRESS 
 */
export const actionUpdateIncomeEgress = (data) => {
    return dispatch => {
        const oResult = UpdateIncomeEgress(data);
        oResult.then(
            oSuccess => {
                dispatch(actionUpdateIncomeEgressSuccess());
            },
            oError => {
                dispatch(actionUpdateIncomeEgressError({
                    messageError: oError.response.data
                }))
            }
        )
    }
}

export const actionUpdateIncomeEgressSuccess = () => ({
    type: ActionsConstants.UPDATE_INCOME_EGRESS_SUCCESS
})

export const actionUpdateIncomeEgressError = (data) => ({
    type: ActionsConstants.UPDATE_INCOME_EGRESS_ERROR,
    data: data
})

/**
 * GET ALL INCOME EGRESS 
 */
export const actionGetAllIncomeEgress = (data) => {
    return dispatch => {
        const oResult = GetAllService(data);
        oResult.then(
            oSuccess => {
                dispatch(actionGetAllIncomeEgressSuccess({
                    services: oSuccess.services
                }))
            },
            oError => {
                dispatch(actionGetAllIncomeEgressError({
                    messageError: oError.response.data
                }))
            }
        )
    }
}

export const actionGetAllIncomeEgressSuccess = (data) => ({
    type: ActionsConstants.GET_ALL_INCOME_EGRESS_SUCCESS,
    data: data
})

export const actionGetAllIncomeEgressError = (data) => ({
    type: ActionsConstants.GET_ALL_INCOME_EGRESS_ERROR,
    data: data
})
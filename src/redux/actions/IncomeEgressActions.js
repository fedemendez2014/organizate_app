import { ActionsConstants } from '../../Constants';
import { AddIncomeEgress, UpdateIncomeEgress, GetAllIncomeEgress } from '../services/IncomeEgressServices';
import { actionUserSessionClose } from './AccountActions';

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
                if(oError.response.status === 401){
                    dispatch(actionUserSessionClose());
                }
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
                if(oError.response.status === 401){
                    dispatch(actionUserSessionClose());
                }
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
        const oResult = GetAllIncomeEgress(data);
        oResult.then(
            oSuccess => {
                dispatch(actionGetAllIncomeEgressSuccess({
                    objects: oSuccess.data.data
                }))
            },
            oError => {
                if(oError.response.status === 401){
                    dispatch(actionUserSessionClose());
                }
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
import { ActionsConstants } from '../../Constants';
import { AddCustomer, UpdateCustomer, GetAllCustomer } from '../services/CustomerServices';

/**
 * ADD CUSTOMER 
 */
export const actionAddCustomer = (data) => {
    return dispatch => {
        const oResult = AddCustomer(data);
        oResult.then(
            oSuccess => {
                dispatch(actionAddCustomerSuccess());
            },
            oError => {
                dispatch(actionAddCustomerError({
                    messageError: oError.response.data
                }))
            }
        )
    }
}

export const actionAddCustomerSuccess = () => ({
    type: ActionsConstants.ADD_INCOME_EGRESS_SUCCESS
})

export const actionAddCustomerError = (data) => ({
    type: ActionsConstants.ADD_INCOME_EGRESS_ERROR,
    data: data
})

/**
 * UPDATE CUSTOMER
 */
export const actionUpdateCustomer = (data) => {
    return dispatch => {
        const oResult = UpdateCustomer(data);
        oResult.then(
            oSuccess => {
                dispatch(actionUpdateCustomerSuccess());
            },
            oError => {
                dispatch(actionUpdateCustomerError({
                    messageError: oError.response.data
                }))
            }
        )
    }
}

export const actionUpdateCustomerSuccess = () => ({
    type: ActionsConstants.UPDATE_CUSTOMER_SUCCESS
})

export const actionUpdateCustomerError = (data) => ({
    type: ActionsConstants.UPDATE_CUSTOMER_ERROR,
    data: data
})

/**
 * GET ALL CUSTOMER 
 */
export const actionGetAllCustomer = (data) => {
    return dispatch => {
        const oResult = GetAllCustomer(data);
        oResult.then(
            oSuccess => {
                dispatch(actionGetAllCustomerSuccess({
                    customers: oSuccess.customers
                }))
            },
            oError => {
                dispatch(actionGetAllCustomerError({
                    messageError: oError.response.data
                }))
            }
        )
    }
}

export const actionGetAllCustomerSuccess = (data) => ({
    type: ActionsConstants.GET_ALL_CUSTOMER_SUCCESS,
    data: data
})

export const actionGetAllCustomerError = (data) => ({
    type: ActionsConstants.GET_ALL_CUSTOMER_ERROR,
    data: data
})
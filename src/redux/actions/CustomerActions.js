import { ActionsConstants } from '../../Constants';
import { AddCustomer, UpdateCustomer, GetAllCustomer, DeleteCustomer } from '../services/CustomerServices';
import { actionUserSessionClose } from './AccountActions';

/**
 * ADD CUSTOMER 
 */
export const actionAddCustomer = (data) => {
    return dispatch => {
        dispatch(actionActionsCustomerLoading());
        const oResult = AddCustomer(data);
        oResult.then(
            oSuccess => {
                dispatch(actionAddCustomerSuccess());
                dispatch(actionGetAllCustomer({
                    token: data.token,
                    page: 0
                }));
            },
            oError => {
                if (oError.response.status === 401) {
                    dispatch(actionUserSessionClose());
                }
                dispatch(actionAddCustomerError({
                    messageError: oError.response.data.message
                }))
            }
        )
    }
}

export const actionAddCustomerSuccess = () => ({
    type: ActionsConstants.ADD_CUSTOMER_SUCCESS
})

export const actionAddCustomerError = (data) => ({
    type: ActionsConstants.ADD_CUSTOMER_ERROR,
    data: data
})

/**
 * UPDATE CUSTOMER
 */
export const actionUpdateCustomer = (data) => {
    return dispatch => {
        dispatch(actionActionsCustomerLoading());
        const oResult = UpdateCustomer(data);
        oResult.then(
            oSuccess => {
                dispatch(actionUpdateCustomerSuccess());
                dispatch(actionGetAllCustomer({
                    token: data.token,
                    page: 0
                }));
            },
            oError => {
                if (oError.response.status === 401) {
                    dispatch(actionUserSessionClose());
                }
                dispatch(actionUpdateCustomerError({
                    messageError: oError.response.data.message
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
        dispatch(actionGetAllCustomerLoading());
        const oResult = GetAllCustomer(data);
        oResult.then(
            oSuccess => {
                dispatch(actionGetAllCustomerSuccess({
                    customers: oSuccess.customers
                }))
            },
            oError => {
                if (oError.response.status === 401) {
                    dispatch(actionUserSessionClose());
                }
                dispatch(actionGetAllCustomerError({
                    messageError: oError.response.data.message
                }))
            }
        )
    }
}

export const actionGetAllCustomerLoading = () => ({
    type: ActionsConstants.GET_CUSTOMERS_LOADING
})

export const actionGetAllCustomerSuccess = (data) => ({
    type: ActionsConstants.GET_ALL_CUSTOMER_SUCCESS,
    data: data
})

export const actionGetAllCustomerError = (data) => ({
    type: ActionsConstants.GET_ALL_CUSTOMER_ERROR,
    data: data
})

/**
 * DELETE CUSTOMER
 */
export const actionDeleteCustomer = (data) => {
    return async dispatch => {
        dispatch(actionActionsCustomerLoading());
        try {
            const response = await DeleteCustomer(data);
            dispatch(actionDeleteCustomerSuccess());
        } catch (error) {
            if (error.response.status === 401) {
                dispatch(actionUserSessionClose());
            }
            dispatch(actionDeleteCustomerError({
                messageError: error.response.data.message
            }))
        }
    }
}

export const actionDeleteCustomerSuccess = () => ({
    type: ActionsConstants.DELETE_CUSTOMER_SUCCESS
});

export const actionDeleteCustomerError = (data) => ({
    type: ActionsConstants.DELETE_CUSTOMER_ERROR,
    data: data
});

/**
 * GLOBAL CUSTOMER ACTIONS
 */
export const actionActionsCustomerLoading = () => ({
    type: ActionsConstants.ACTIONS_CUSTOMER_LOADING
})
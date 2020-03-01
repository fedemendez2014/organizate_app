import { ActionsConstants } from '../../Constants';

export const actionGetAllCustomer = (data) => {
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

export const actionGetAllCustomerSuccess = (data) => ({
    type: ActionsConstants.GET_ALL_CUSTOMER_SUCCESS,
    data: data
})

export const actionGetAllCustomerError = (data) => ({
    type: ActionsConstants.GET_ALL_CUSTOMER_ERROR,
    data: data
})
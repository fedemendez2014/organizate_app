import { Constants, ActionsConstants } from '../../Constants';
import { login } from '../services/AccountServices';

/**
 * 
 */
export const actionLogin = (data) => {
    return dispatch => {
        const oResult = login(data);
        oResult.then(
            oSuccess => {
                dispatch(actionLoginSuccess(oSuccess));
            },
            oError => {
                if (oError.response.status === 401) {
                    //logout();
                }
                else {
                    dispatch(actionLoginSuccess(oError.response.data));
                }
            }
        )
    }
}

/**
 * 
 */
export const actionLoginSuccess = (data) => ({
    type: ActionsConstants.LOGIN_SUCCESS,
    data: data
})
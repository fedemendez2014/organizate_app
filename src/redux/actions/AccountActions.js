import { Constants, ActionsConstants } from '../../Constants';
import { login } from '../services/AccountServices';
import { AsyncStorage } from "react-native";

/**
 * 
 */
export const actionLogin = (data) => {
    return dispatch => {
        const oResult = login(data);
        oResult.then(
            oSuccess => {
                setStorange(oSuccess);
                dispatch(actionLoginSuccess({
                    status: true,
                    account: oSuccess
                }));
            },
            oError => {
                if (oError.response.status === 401) {
                    //logout();
                }
                else {
                    dispatch(actionLoginSuccess({
                        status: false,
                        messageError: oError.response.data
                    }));
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

/**
 *  
 */
export const actionUserIsLogged = () => {
    return dispatch => {
        const oSessionLogin = getLoginDataLocalStorange();
        oSessionLogin.then(
            oResult => {
                if (null !== oResult && undefined !== oResult) {
                    dispatch(actionLoginSuccess({
                        status: true,
                        account: JSON.parse(oResult)
                    }));
                }
                else {
                    dispatch(actionLoginSuccess(null));
                }
            }
        )
    }
}

/**
 * @param {*} data 
 */
export const actionUserSessionClose = () => {
    return dispatch => {
        setEmptyLocalStorange();
        dispatch(actionUserSessionCloseSuccess());
    }
}

/**
 * 
 */
export const actionUserSessionCloseSuccess = () => ({
    type: ActionsConstants.USER_LOGOUT_SUCCESS
})

/**
 *  
 */
const setStorange = async (oSessionLogin) => {
    await AsyncStorage.setItem('@OrganizateApp:UserSession', JSON.stringify(oSessionLogin));
}

/**
 * 
 */
const getLoginDataLocalStorange = async () => {
    return await AsyncStorage.getItem('@OrganizateApp:UserSession');
}

/**
 * 
 */
const setEmptyLocalStorange = async () => {
    await AsyncStorage.removeItem('@OrganizateApp:UserSession');
}
import { Constants } from '../../Constants';
import { login } from '../services/AccountServices';

/**
 * 
 */
export const actionLogin = (data) => {
    return dispatch => {
        const oResult = login(data);
        oResult.then(
            oSuccess => {
                console.log(oSuccess)
            },
            oError => {
                console.log(oError)
            }
        )
    }
}
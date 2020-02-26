import { ActionsConstants } from '../../Constants';
import { AddService } from '../services/ServiceServices';

export const actionAddService = (data) => {
    return dispatch => {
        const oResult = AddService(data);
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
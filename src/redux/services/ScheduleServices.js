import axios from 'axios';
import { Constants } from "../../Constants";

/**
 * @param {*} data
 */
export const GetScheduleList = (data) => {
    let config = {
        headers: {
            Authorization: data.token,
        }
    }
    return axios.get(`${Constants.URLSERVICE}reservations/day?date=${data.date}`, config)
        .then(oResult => oResult.data)
}
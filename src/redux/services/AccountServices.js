import axios from 'axios';
import { Constants } from "../../Constants";

export const login = ({ email, password }) => {
    return axios.post(Constants.URLSERVICE + 'login',
        {
            email: email,
            password: password
        })
        .then(oResult => oResult.data)
}
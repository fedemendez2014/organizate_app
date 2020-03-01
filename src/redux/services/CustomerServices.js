import axios from 'axios';
import { Constants } from "../../Constants";

/**
 * @param {*} data
 */
export const AddCustomer = (data) => {
    let config = {
        headers: {
            Authorization: data.token,
        }
    }
    return axios.post(Constants.URLSERVICE + 'customer',
        {
            name: data.name,
            address: data.address,
            phone: data.phone,
            mobile_phone: data.mobile_phone,
            observations: data.observations,
            email: data.email
        }, config)
        .then(oResult => oResult.data)
}

export const UpdateCustomer = (data) => {
    let config = {
        headers: {
            Authorization: data.token,
        }
    }
    return axios.put(Constants.URLSERVICE + 'customer/' + data.id,
        {
            name: data.name,
            address: data.address,
            phone: data.phone,
            mobile_phone: data.mobile_phone,
            observations: data.observations,
            email: data.email
        }, config)
        .then(oResult => oResult.data)
}

export const GetCustomer = (data) => {
    let config = {
        headers: {
            Authorization: data.token,
        }
    }
    return axios.get(Constants.URLSERVICE + 'customer/' + data.id, config)
        .then(oResult => oResult.data)
}

export const GetAllCustomer = (data) => {
    let config = {
        headers: {
            Authorization: data.token,
        }
    }
    return axios.get(Constants.URLSERVICE + 'customer/all/' + data.page, config)
        .then(oResult => oResult.data)
}

export const DeleteCustomer = (data) => {
    let config = {
        headers: {
            Authorization: data.token,
        }
    }
    return axios.delete(Constants.URLSERVICE + 'customer/' + data.id, config)
        .then(oResult => oResult.data)
}
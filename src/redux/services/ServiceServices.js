import axios from 'axios';
import { Constants } from "../../Constants";

/**
 * @param {*} data
 */
export const AddService = (data) => {
    let config = {
        headers: {
            Authorization: data.token,
        }
    }
    return axios.post(Constants.URLSERVICE + 'service',
        {
            name: data.name,
            description: data.description,
            price: data.price,
            observations: data.observations
        }, config)
        .then(oResult => oResult.data)
}

export const UpdateService = (data) => {
    let config = {
        headers: {
            Authorization: data.token,
        }
    }
    return axios.put(Constants.URLSERVICE + 'service/' + data.id,
        {
            name: data.name,
            description: data.description,
            price: data.price,
            observations: data.observations
        }, config)
        .then(oResult => oResult.data)
}

export const GetService = (data) => {
    let config = {
        headers: {
            Authorization: data.token,
        }
    }
    return axios.get(Constants.URLSERVICE + 'service/' + data.serviceId, config)
        .then(oResult => oResult.data)
}

export const GetAllService = (data) => {
    let config = {
        headers: {
            Authorization: data.token,
        }
    }
    return axios.get(Constants.URLSERVICE + 'service/all/' + data.page, config)
        .then(oResult => oResult.data)
}

export const DeleteService = (data) => {
    let config = {
        headers: {
            Authorization: data.token,
        }
    }
    return axios.delete(Constants.URLSERVICE + 'service/' + data.serviceId, config)
        .then(oResult => oResult.data)
}
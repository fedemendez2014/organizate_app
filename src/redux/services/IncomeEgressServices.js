import axios from 'axios';
import { Constants } from "../../Constants";

/**
 * @param {*} data
 */
export const AddIncomeEgress = (data) => {
    let config = {
        headers: {
            Authorization: data.token,
        }
    }
    return axios.post(Constants.URLSERVICE + 'incomeEgress',
        {
            reason: data.reason,
            amount: data.amount,
            type: data.type,
            date: data.date
        }, config)
        .then(oResult => oResult.data)
}

export const UpdateIncomeEgress = (data) => {
    let config = {
        headers: {
            Authorization: data.token,
        }
    }
    return axios.put(Constants.URLSERVICE + 'incomeEgress/' + data.id,
        {
            reason: data.reason,
            amount: data.amount,
            type: data.type,
            date: data.date
        }, config)
        .then(oResult => oResult.data)
}

export const GetIncomeEgress = (data) => {
    let config = {
        headers: {
            Authorization: data.token,
        }
    }
    return axios.get(Constants.URLSERVICE + 'incomeEgress/' + data.id, config)
        .then(oResult => oResult.data)
}

export const GetAllIncomeEgress = (data) => {
    let config = {
        headers: {
            Authorization: data.token,
        }
    }
    return axios.get(`${Constants.URLSERVICE}incomeEgress/all/${data.page}/${data.type}?search=${data.search}`, config)
        .then(oResult => oResult.data)
}

export const DeleteIncomeEgress = (data) => {
    let config = {
        headers: {
            Authorization: data.token,
        }
    }
    return axios.delete(`${Constants.URLSERVICE}incomeEgress/${data.id}`, config)
        .then(oResult => oResult.data)
}
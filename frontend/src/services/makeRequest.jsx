import axios from "axios"

const api = axios.create({
    baseURL: import.meta.env.VITE_SERVER_URL,
    headers: {
        Accept: 'application/json',
    },
    // TODO: with localStorage 
    // withCredentials: true,
})

export const makeRequest = async (url, options) => {
    // console.log(process.env.REACT_APP_SERVER_URL)
    return api(url, options)
    .then(response => response.data)
    //  TODO: implement custom error
    // .catch(error => error)
    .catch(error => Promise.reject(error?.response?.data?.message ?? "Error"))
}
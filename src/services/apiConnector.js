import axios from "axios"

export const axiosInstance = axios.create({});

export const apiConnector = (method, url) => {
    return axiosInstance({
        method:`${method}`,
        url:`${url}`,
        
       
    });
}
import axiosInstance from "./axiosInstance"

export const BASE_URL = '/provinces'

const provinceApi = {

    getAll(){
        return axiosInstance.get(url)
    },

    getById(id){
        const url = `${BASE_URL}/${id}`
        return axiosInstance.get(url)
    }
    
}

export default provinceApi;
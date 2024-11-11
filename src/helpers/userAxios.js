import { root } from "postcss"
import { apiProcessor } from "./axiosHelper"


const rootAPI = "http://localhost:9001/api/v1"

export const addUser = async(data)=>{
    const axiosObj ={
        method : "POST",
        url: rootAPI + "/users",
        data,
    }
    return await apiProcessor(axiosObj);
}


export const getUser = async(data)=>{
    const axiosObj ={
        method : "POST",
        url: rootAPI + "/users/login",
        data,
    }
    return await apiProcessor(axiosObj);
}

import { root } from "postcss";
import { apiProcessor } from "./axiosHelper";

export const getJWTtoken = () => {
  const token = localStorage.getItem("accessJWT");
  return token;
};

export const setJWTtoken = (token) => {
  localStorage.setItem("accessJWT", token);
};

const rootAPI = "http://localhost:9001/api/v1";

export const addUser = async (data) => {
  const axiosObj = {
    method: "POST",
    url: rootAPI + "/users",
    data,
  };
  return await apiProcessor(axiosObj);
};


export const getTransactions = async () => {
    let token = localStorage.getItem("accessJWT");  // Ensure the token is retrieved from localStorage
    console.log("Token:", token);  // Make sure the token is being logged correctly
  
    const obj = {
      method: "get",
      url: `${rootAPI}/transactions/transaction`,
      headers: {
        Authorization: `Bearer ${token}`,  // Send the token in the Authorization header
        "Content-Type": "application/json",
      },
    };
  
    return await apiProcessor(obj);
  };
  
export const addTransactions = async (formData) => {
    let token = localStorage.getItem("accessJWT"); 
    const obj = {
        method: "post",
        url: rootAPI + "/transactions",
        data: formData,
        headers:{
            Authorization: `Bearer ${token}`,
        },
    };
    return await apiProcessor(obj);
};




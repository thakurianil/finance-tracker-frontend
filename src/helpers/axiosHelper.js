import axios from "axios";

export const apiProcessor = async (axiosObj) => {
  try {
    const { url, method, data } = axiosObj;
    const response = await axios({
      url,
      method,
      data,
    });
    return response.data;
  } catch (error) {
    return {
      status: "error",
      message: error?.response?.data?.message || error.message,
    };
  }
};

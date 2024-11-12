import axios from "axios";

export const apiProcessor = async (axiosObj) => {
  try {
    const { url, method, data, headers } = axiosObj;
    const response = await axios({
      url,
      method,
      data,
      headers,
    });
    return response.data;
  } catch (error) {
    return {
      status: "error",
      message: error?.response?.data?.message || error.message,
    };
  }
};

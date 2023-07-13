import axios from "axios";
import { BASE_URL } from "../config/config.js";
import { ErrorHandlers } from "./ErrorHandlers.js";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: false,
});

axiosInstance.interceptors.response.use(
  function (response) {
    // const newRes = {
    //   ...response,
    //   data: { ...response.data, AUTH_TOKEN: response?.headers["auth_token"] },
    // };

    return response;
  },
  function (error) {
    return Promise.reject(
      new ErrorHandlers().ValidationError(
        error?.response?.data?.message || error?.response?.data?.responseMessage
      )
    );
  }
);

export default axiosInstance;

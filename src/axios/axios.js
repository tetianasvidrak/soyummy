import axios from "axios";

const axiosBaseUrl = process.env.AXIOS_BASE_URL;

axios.defaults.baseURL = axiosBaseUrl;

export const setBearerToken = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export default axios;

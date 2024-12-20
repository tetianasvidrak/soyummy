import axios from "axios";

const axiosBaseUrl = import.meta.env.VITE_AXIOS_BASE_URL;

console.log(axiosBaseUrl);

axios.defaults.baseURL = axiosBaseUrl;

export const setBearerToken = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export default axios;

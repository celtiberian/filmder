import axios from "axios";
import { API_KEY, TMDb_URL } from "./constants.js";

const API = axios.create({
  baseURL: TMDb_URL,
})

API.interceptors.request.use(config => {
  config.params = {
    ...config.params,
    api_key: API_KEY,
  };
  return config;
});

export default API;

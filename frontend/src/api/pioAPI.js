import axios from "axios";
import { ENGINE_URL } from "./constants.js";

const API = axios.create({
  baseURL: ENGINE_URL,
})

export default API;

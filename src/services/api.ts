import axios, { AxiosRequestConfig } from "axios";
import { store } from "./../store";
const api = axios.create({
  baseURL: "http://localhost:8000",
  withCredentials: true
});

api.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const token = store.getState().session.token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

export default api;

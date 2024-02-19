import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.MODE === "development" ? import.meta.env.VITE_DEV_URL : import.meta.env.VITE_PROD_URL,
});

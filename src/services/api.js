import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.PROD
    ? "https://portify-backend-hm08.onrender.com"
    : "/api",
});

export default api;

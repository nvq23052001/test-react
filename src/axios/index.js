import axios from "axios";

const instance = axios.create({
  baseURL: "http://42.96.44.215:9996/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export const instanceAuthor = axios.create({
  baseURL: "http://42.96.44.215:9996/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

const axiosConfig = (config) => {
  const token = JSON.parse(localStorage.getItem("author"));
  if (token) {
    config.headers["Authorization"] = JSON.parse(
      localStorage.getItem("author")
    );
  }
  return config;
};
instanceAuthor.interceptors.request.use(axiosConfig, () => console.log("Loi"));
export default instance;

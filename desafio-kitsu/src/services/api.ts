import axios from "axios";
import { environment } from "../environments/environments";

const http = axios.create({
  baseURL: environment.baseUrl,
  headers: {
    "Content-type": "application/json",
  },
});

export const getAnimes = () => {
  return http.get("anime");
};

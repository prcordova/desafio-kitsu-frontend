import axios from "axios";
import { environment } from "../environments/environments";

const http = axios.create({
  baseURL: environment.baseUrl,
  headers: {
    "Content-type": "application/json",
  },
});

const filter = "?page[limit]=19";

export const getAnimes = () => {
  return http.get(`anime${filter}`);
};

export const getAnime = (id: number) => {
  return http.get(`anime/${id}`);
};

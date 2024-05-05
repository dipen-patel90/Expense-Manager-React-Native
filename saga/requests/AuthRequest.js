import axios from "axios";
import { BASE_URL } from "../APIConstants";

export function loginRQ(username, password) {
  return axios.request({
    method: "post",
    baseURL: BASE_URL,
    url: "/login",
    data: {
      username: username,
      password: password,
    },
  });
}

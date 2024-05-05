import axios from "axios";
import { BASE_URL } from "../APIConstants";

export function getAllExpensesRQ() {
  return axios.request({
    method: "get",
    baseURL: BASE_URL,
    url: "/getAllExpenses",
  });
}

export function getExpenseDetailsRQ(id) {
  return axios.request({
    method: "get",
    baseURL: BASE_URL,
    url: "/getExpenseDetails/?id=" + id,
  });
}

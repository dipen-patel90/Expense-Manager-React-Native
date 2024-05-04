import axios from "axios";

export function loginRQ() {
  return axios.request({
    method: "get",
    url: "https://my-json-server.typicode.com/typicode/demo/posts",
  });
}

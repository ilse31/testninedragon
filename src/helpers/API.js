import axios from "axios";

export const Api = axios.create({
  baseURL: "https://endpoint-blog.ninedragonlabs.com/api/",
  headers: {
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json;charset=UTF-8",
    Authorization: "Bearer " + localStorage.getItem("token"),
  },
});

import axios from "axios";

export const BASE_URL = "http://localhost:5678";
export const LOGIN_ENDPOINT = "";
export const REGISTER_ENDPOINT = "/people/register";
export const USERDETAILS_UPDATE_ENDPOINT = "";
export const REFRESHTOKEN_ENDPOINT = "";

export const config = ({ token }) => {
  return {
    headers: {
      "Content-Type": "application/json",
      token: token,
    },
  };
};
export const headers = ({ token }) => {
  return {
    "Content-Type": "application/json",
    token: token,
  };
};

export default axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

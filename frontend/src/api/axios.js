import axios from "axios";

export const BASE_URL = "http://localhost:8081";
export const LOGIN_ENDPOINT = "/people/login";
export const REGISTER_ENDPOINT = "/people/register";
export const LOGOUT_ENDPOINT = "/people/logout";
export const USERDETAILS_UPDATE_ENDPOINT = "/people/update";
export const REFRESHTOKEN_ENDPOINT = "/people/getinfo";
export const PATIENTS_SEARCH_ENDPOINT = "/people/listall";
export const UPDATE_AREAS_ENDPOINT = "/affected/update";
export const AFFECTED_AREAS_ENDPOINT = "/affected/listall";

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

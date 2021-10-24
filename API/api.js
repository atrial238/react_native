import axios from "axios";
import { API_KEY } from "../constants/constant";

const instance = axios.create({
  baseURL: "https://shop-app-afd4d-default-rtdb.firebaseio.com/",
  headers: { "Content-Type": "application/json" },
});

export const getItems = async (endpoint) => {
  return await instance.get(endpoint);
};

export const postItem = async (endpoint, data) => {
  return await instance.post(endpoint, data);
};

export const updateItem = async (endpoint, data) => {
  return await instance.put(endpoint, data);
};

export const authAPI = {
  signUp: async (data) => {
    return await axios.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
      data
    );
  },
  signIn: async (data) => {
    return await axios.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`,
      data
    );
  },
  refreshToken: async (data) => {
    return await axios.post(
      `https://securetoken.googleapis.com/v1/token?key=${API_KEY}`,
      data
    );
  },
};

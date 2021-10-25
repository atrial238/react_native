import axios from "axios";
import { API_KEY } from "../constants/constant";
import { getObjectFromStore } from "../utils/getObjectFromStore";

const instance = axios.create({
  baseURL: "https://shop-app-afd4d-default-rtdb.firebaseio.com/",
  headers: { "Content-Type": "application/json" },
});

export const getItems = async (endpoint) => {
  const { idToken } = await getObjectFromStore("user");
  return await instance.get(`${endpoint}?auth=${idToken}`);
};

export const postItem = async (endpoint, data) => {
  const { idToken } = await getObjectFromStore("user");
  return await instance.post(`${endpoint}?auth=${idToken}`, data);
};

export const updateItem = async (endpoint, data) => {
  const { idToken } = await getObjectFromStore("user");
  return await instance.put(`${endpoint}?auth=${idToken}`, data);
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

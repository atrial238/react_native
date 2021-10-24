import axios from "axios";

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

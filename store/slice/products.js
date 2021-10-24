import { createSlice } from "@reduxjs/toolkit";
import { getItems, postItem, updateItem } from "../../API/api";
import { objectToArray } from "../../utils/objectToArray";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    allProducts: [],
    userProducts: [],
  },
  reducers: {
    setAllProducts: (state, action) => {
      state.allProducts = action.payload;
    },
    setUserProducts: (state, action) => {
      state.userProducts = action.payload;
    },
    createProduct: (state, action) => {
      const { title, imageUrl, description, price, id } = action.payload;
      const product = {
        id,
        ownerId: "u1",
        title,
        imageUrl,
        description,
        price,
      };
      return {
        allProducts: [...state.allProducts, product],
        userProducts: [...state.userProducts, product],
      };
    },
    updateProduct: (state, action) => {
      const { id, data } = action.payload;
      const { title, imageUrl, description } = data;
      const productIndex = state.userProducts.findIndex(
        (product) => product.id === id
      );
      state.userProducts[productIndex] = {
        ...state.userProducts[productIndex],
        title,
        imageUrl,
        description,
      };
    },
    deleteProduct: (state, { payload }) => {
      return {
        userProducts: state.userProducts.filter(
          (product) => product.id !== payload
        ),
        allProducts: state.userProducts.filter(
          (product) => product.id !== payload
        ),
      };
    },
  },
});

export const {
  deleteProduct,
  updateProduct,
  createProduct,
  setAllProducts,
  setUserProducts,
} = productsSlice.actions;

export const fetchAllProducts = () => async (dispatch) => {
  const response = await getItems("allProducts.json");
  response.data && dispatch(setAllProducts(objectToArray(response.data)));
};

export const fetchUserProducts = () => async (dispatch) => {
  const response = await getItems("userProducts.json");
  response.data && dispatch(setUserProducts(objectToArray(response.data)));
};

export const addUserProducts = (data) => async (dispatch) => {
  const responseAddProducts = await postItem("userProducts.json", data);
  const newProductId = responseAddProducts.data.name;
  const responseAddAllProducts = await updateItem(
    `allProducts/${newProductId}.json`
  );
  data.id = newProductId;
  console.log(responseAddAllProducts);
  dispatch(createProduct(data));
};

export default productsSlice.reducer;

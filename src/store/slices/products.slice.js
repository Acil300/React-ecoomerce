import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setIsLoadingGlobal } from "./isLoading.slice";

export const productsSlice = createSlice({
  name: "products",
  initialState: [],
  reducers: {
    setProductsGlobal: (state, action) => action.payload
  }
});

export const {setProductsGlobal} = productsSlice.actions;

export const getAllProducts = () => (dispatch) =>{

  dispatch(setIsLoadingGlobal(true))

  return axios.get("https://ecommerce-api-react.herokuapp.com/api/v1/products")
    .then(res => dispatch(setProductsGlobal(res.data.data.products)))
    .catch((error) => console.log(error))
    .finally(() => dispatch(setIsLoadingGlobal(false)))
}

export default productsSlice.reducer;

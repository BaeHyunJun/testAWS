// import { ProductState, ProductAction } from "@src/types";
import { createReducer } from "typesafe-actions";
// import {
//   GET_PRODUCT_DATA,
//   GET_PRODUCT_DATA_SUCCESS,
//   GET_PRODUCT_DATA_ERROR,
//   GET_PRODUCTS_DATA,
//   GET_PRODUCTS_DATA_SUCCESS,
//   GET_PRODUCTS_DATA_ERROR,
//   TOGGLE_PROPOSAL,
//   TOGGLE_COURT,
// } from "@actions/products";
//
// const initialState: ProductState = {};
//
// const products = createReducer<ProductState, ProductAction>(initialState, {
//   [GET_PRODUCT_DATA]: state => ({
//     ...state,
//     isLoading: true,
//   }),
//   [GET_PRODUCT_DATA_SUCCESS]: (state, action) => ({
//     ...state,
//     productData: action.payload,
//     isLoading: false,
//   }),
//   [GET_PRODUCT_DATA_ERROR]: (state, action) => ({
//     ...state,
//     error: action.payload,
//     isLoading: false,
//   }),
//   [GET_PRODUCTS_DATA]: state => ({
//     ...state,
//     isLoading: true,
//   }),
//   [GET_PRODUCTS_DATA_SUCCESS]: (state, action) => ({
//     ...state,
//     searchListData: action.payload.result,
//     isLoading: false,
//   }),
//   [GET_PRODUCTS_DATA_ERROR]: (state, action) => ({
//     ...state,
//     error: action.payload,
//     isLoading: false,
//   }),
//   [TOGGLE_COURT]: state => ({
//     ...state,
//   }),
//   [TOGGLE_PROPOSAL]: state => ({
//     ...state,
//   }),
// });
//
// export default products;

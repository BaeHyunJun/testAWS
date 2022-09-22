import { createAsyncAction, deprecated } from "typesafe-actions";
import { AxiosError } from "axios";

// import { searchListData, product_Data, SearchParams, DetailParams } from "@src/types";

const { createStandardAction } = deprecated;

export const TOGGLE_COURT = "TOGGLE_COURT";
export const TOGGLE_PROPOSAL = "TOGGLE_PROPOSAL";

export const GET_PRODUCT_DATA = "GET_PRODUCT_DATA";
export const GET_PRODUCT_DATA_SUCCESS = "GET_PRODUCT_DATA_SUCCESS";
export const GET_PRODUCT_DATA_ERROR = "GET_PRODUCT_DATA_ERROR";

export const GET_PRODUCTS_DATA = "GET_PRODUCTS_DATA";
export const GET_PRODUCTS_DATA_SUCCESS = "GET_PRODUCTS_DATA_SUCCESS";
export const GET_PRODUCTS_DATA_ERROR = "GET_PRODUCTS_DATA_ERROR";

export const toggleCourt = createStandardAction(TOGGLE_COURT)();
export const toggleProposal = createStandardAction(TOGGLE_PROPOSAL)();

// export const getProductData = createAsyncAction(GET_PRODUCT_DATA, GET_PRODUCT_DATA_SUCCESS, GET_PRODUCT_DATA_ERROR)<
//   DetailParams,
//   product_Data,
//   AxiosError
// >();
//
// export const getMapMarkerList = createAsyncAction(GET_PRODUCTS_DATA, GET_PRODUCTS_DATA_SUCCESS, GET_PRODUCTS_DATA_ERROR)<
//   SearchParams,
//   searchListData,
//   AxiosError
// >();

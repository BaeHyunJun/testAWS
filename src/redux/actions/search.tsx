import { createAsyncAction, deprecated } from "typesafe-actions";
import { AxiosError } from "axios";
import { searchListData, SearchParams } from "@src/types";

const { createStandardAction } = deprecated;

export const GET_SEARCH_DATA = "GET_SEARCH_DATA";
export const GET_SEARCH_DATA_SUCCESS = "GET_SEARCH_DATA_SUCCESS";
export const GET_SEARCH_DATA_ERROR = "GET_SEARCH_DATA_ERROR";
export const getSearchData = createAsyncAction(GET_SEARCH_DATA, GET_SEARCH_DATA_SUCCESS, GET_SEARCH_DATA_ERROR)<
  SearchParams,
  searchListData,
  AxiosError
>();

export const SET_SEARCH_DATA = "search/SET_SEARCH_DATALIST";
export const setSearchData = createStandardAction(SET_SEARCH_DATA)<searchListData>();

export const SET_PARAMS = "search/SET_PARAMS";
export const setParams = createStandardAction(SET_PARAMS)<SearchParams>();

export const GET_INTEREST = "GET_INTEREST";
export const GET_INTEREST_SUCCESS = "GET_INTEREST_SUCCESS";
export const GET_INTEREST_ERROR = "GET_INTEREST_ERROR";

export const getInterestAction = createAsyncAction(GET_INTEREST, GET_INTEREST_SUCCESS, GET_INTEREST_ERROR)<
  SearchParams,
  searchListData,
  AxiosError
>();

export const ADD_INTEREST = "ADD_INTEREST";
export const ADD_INTEREST_SUCCESS = "ADD_INTEREST_SUCCESS";
export const ADD_INTEREST_ERROR = "ADD_INTEREST_ERROR";

export const addInterestAction = createAsyncAction(ADD_INTEREST, ADD_INTEREST_SUCCESS, ADD_INTEREST_ERROR)<
  FormData,
  searchListData,
  AxiosError
>();

export const UPDATE_INTEREST = "UPDATE_INTEREST";
export const UPDATE_INTEREST_SUCCESS = "UPDATE_INTEREST_SUCCESS";
export const UPDATE_INTEREST_ERROR = "UPDATE_INTEREST_ERROR";

export const updateInterestAction = createAsyncAction(UPDATE_INTEREST, UPDATE_INTEREST_SUCCESS, UPDATE_INTEREST_ERROR)<
  FormData,
  searchListData,
  AxiosError
>();

export const DELETE_INTEREST = "DELETE_INTEREST";
export const DELETE_INTEREST_SUCCESS = "DELETE_INTEREST_SUCCESS";
export const DELETE_INTEREST_ERROR = "DELETE_INTEREST_ERROR";

export const deleteInterestAction = createAsyncAction(DELETE_INTEREST, DELETE_INTEREST_SUCCESS, DELETE_INTEREST_ERROR)<
  FormData,
  searchListData,
  AxiosError
>();

export const GET_VISIT = "GET_VISIT";
export const GET_VISIT_SUCCESS = "GET_VISIT_SUCCESS";
export const GET_VISIT_ERROR = "GET_VISIT_ERROR";

export const getVisitAction = createAsyncAction(GET_VISIT, GET_VISIT_SUCCESS, GET_VISIT_ERROR)<SearchParams, searchListData, AxiosError>();

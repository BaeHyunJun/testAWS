import { createReducer } from "typesafe-actions";
import { SearchAction, SearchState } from "@src/types";
import {
  GET_SEARCH_DATA,
  GET_SEARCH_DATA_SUCCESS,
  GET_SEARCH_DATA_ERROR,
  SET_SEARCH_DATA,
  SET_PARAMS,
  ADD_INTEREST,
  ADD_INTEREST_SUCCESS,
  ADD_INTEREST_ERROR,
  UPDATE_INTEREST,
  UPDATE_INTEREST_SUCCESS,
  UPDATE_INTEREST_ERROR,
  DELETE_INTEREST,
  DELETE_INTEREST_SUCCESS,
  DELETE_INTEREST_ERROR,
  GET_INTEREST,
  GET_INTEREST_SUCCESS,
  GET_INTEREST_ERROR,
  GET_VISIT,
  GET_VISIT_SUCCESS,
  GET_VISIT_ERROR,
} from "@actions/search";
import { initSearchParams } from "@src/config/const";

const initialState: SearchState = {
  searchParams: initSearchParams,
  searchListData: {
    args: {},
    info: {
      code: 0,
      message: "",
      status: false,
    },
    meta: {
      page: 0,
      per_page: 0,
      total_count: 0,
    },
    result: [],
    type: "",
  },
};

const search = createReducer<SearchState, SearchAction>(initialState, {
  [GET_SEARCH_DATA]: state => ({
    ...state,
    isLoading: true,
  }),
  [GET_SEARCH_DATA_SUCCESS]: (state, action) => ({
    ...state,
    searchListData: action.payload,
    isLoading: false,
  }),
  [GET_SEARCH_DATA_ERROR]: (state, action) => ({
    ...state,
    error: action.payload,
    isLoading: false,
  }),
  [SET_SEARCH_DATA]: (state, action) => ({
    ...state,
    searchListData: action.payload,
    isLoading: false,
  }),
  [SET_PARAMS]: (state, action) => ({
    ...state,
    searchParams: action.payload,
  }),
  [ADD_INTEREST]: state => ({
    ...state,
    status: false,
  }),
  [ADD_INTEREST_SUCCESS]: (state, action) => ({
    ...state,
    interestState: action.payload,
    status: true,
  }),
  [ADD_INTEREST_ERROR]: (state, action) => ({
    ...state,
  }),
  [UPDATE_INTEREST]: state => ({
    ...state,
    status: false,
  }),
  [UPDATE_INTEREST_SUCCESS]: (state, action) => ({
    ...state,
    status: true,
  }),
  [UPDATE_INTEREST_ERROR]: (state, action) => ({
    ...state,
  }),
  [DELETE_INTEREST]: state => ({
    ...state,
    status: false,
  }),
  [DELETE_INTEREST_SUCCESS]: (state, action) => ({
    ...state,
    status: true,
  }),
  [DELETE_INTEREST_ERROR]: (state, action) => ({
    ...state,
  }),
  [GET_INTEREST]: state => ({
    ...state,
    status: false,
  }),
  [GET_INTEREST_SUCCESS]: (state, action) => ({
    ...state,
    searchListData: action.payload,
    status: true,
  }),
  [GET_INTEREST_ERROR]: (state, action) => ({
    ...state,
  }),
  [GET_VISIT]: state => ({
    ...state,
    status: false,
  }),
  [GET_VISIT_SUCCESS]: (state, action) => ({
    ...state,
    searchListData: action.payload,
    status: true,
  }),
  [GET_VISIT_ERROR]: (state, action) => ({
    ...state,
  }),
});

export default search;

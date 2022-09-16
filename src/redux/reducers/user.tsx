import { createReducer } from "typesafe-actions";

import { userState, UserAction } from "@src/types";
import {
  INIT_LOGIN,
  LOGIN,
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  LOGOUT,
  LOGOUT_ERROR,
  LOGOUT_SUCCESS,
  IS_LOGIN,
  IS_LOGIN_SUCCESS,
  IS_LOGIN_ERROR,
  ADD_CATEGORY,
  ADD_CATEGORY_SUCCESS,
  ADD_CATEGORY_ERROR,
  GET_CATEGORY,
  GET_CATEGORY_SUCCESS,
  GET_CATEGORY_ERROR,
  UPDATE_CATEGORY,
  UPDATE_CATEGORY_SUCCESS,
  UPDATE_CATEGORY_ERROR,
  DELETE_CATEGORY,
  DELETE_CATEGORY_SUCCESS,
  DELETE_CATEGORY_ERROR,
} from "@actions/user";

const initialState: userState = {
  code: 0,
  status: false,
};

const user = createReducer<userState, UserAction>(initialState, {
  [INIT_LOGIN]: state => ({
    ...state,
    name: "",
    token: "",
    code: "",
    status: "",
  }),
  [LOGIN]: state => ({
    ...state,
  }),
  [LOGIN_SUCCESS]: (state, action) => ({
    ...state,
    name: action.payload.result.username,
    token: action.payload.result.token,
    code: action.payload.info.code,
    status: action.payload.info.status,
  }),
  [LOGIN_ERROR]: (state, action) => ({
    ...state,
  }),
  [IS_LOGIN]: (state, action) => ({
    ...state,
  }),
  [IS_LOGIN_SUCCESS]: (state, action) => ({
    ...state,
    name: action.payload.result.username,
    code: action.payload.info.code,
    status: action.payload.info.status,
  }),
  [IS_LOGIN_ERROR]: (state, action) => ({
    ...state,
  }),
  [LOGOUT]: state => ({
    ...state,
  }),
  [LOGOUT_SUCCESS]: (state, action) => ({
    ...state,
    name: "",
    token: "",
    code: 204,
    status: "",
  }),
  [LOGOUT_ERROR]: (state, action) => ({
    ...state,
  }),
  [ADD_CATEGORY]: state => ({
    ...state,
  }),
  [ADD_CATEGORY_SUCCESS]: (state, action) => ({
    ...state,
    categoryState: action.payload,
  }),
  [ADD_CATEGORY_ERROR]: (state, action) => ({
    ...state,
  }),
  [UPDATE_CATEGORY]: state => ({
    ...state,
  }),
  [UPDATE_CATEGORY_SUCCESS]: (state, action) => ({
    ...state,
    categoryState: action.payload,
  }),
  [UPDATE_CATEGORY_ERROR]: (state, action) => ({
    ...state,
  }),
  [DELETE_CATEGORY]: state => ({
    ...state,
  }),
  [DELETE_CATEGORY_SUCCESS]: (state, action) => ({
    ...state,
    categoryState: action.payload,
  }),
  [DELETE_CATEGORY_ERROR]: (state, action) => ({
    ...state,
  }),
  [GET_CATEGORY]: state => ({
    ...state,
  }),
  [GET_CATEGORY_SUCCESS]: (state, action) => ({
    ...state,
    category: {
      info: action.payload.info,
      result: action.payload.result,
    },
  }),
  [GET_CATEGORY_ERROR]: (state, action) => ({
    ...state,
  }),
});

export default user;

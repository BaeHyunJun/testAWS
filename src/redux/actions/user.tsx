import { deprecated, createAsyncAction } from "typesafe-actions";
import { AxiosError } from "axios";
// import { LoginState } from "@src/types";

const { createStandardAction } = deprecated;

export const COMMON_SEARCH_FILTER = "COMMON_SEARCH_FILTER";
export const INIT_LOGIN = "INIT_LOGIN";

export const setCommonSearhFilter = createStandardAction(COMMON_SEARCH_FILTER)<string, any[]>();
export const initLogin = createStandardAction(INIT_LOGIN)();

export const LOGIN = "LOGIN";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";

// export const loginAction = createAsyncAction(LOGIN, LOGIN_SUCCESS, LOGIN_ERROR)<[string, string], LoginState, AxiosError>();

export const IS_LOGIN = "IS_LOGIN";
export const IS_LOGIN_SUCCESS = "IS_LOGIN_SUCCESS";
export const IS_LOGIN_ERROR = "IS_LOGIN_ERROR";

// export const isLoginAction = createAsyncAction(IS_LOGIN, IS_LOGIN_SUCCESS, IS_LOGIN_ERROR)<string, LoginState, AxiosError>();

export const LOGOUT = "LOGOUT";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_ERROR = "LOGOUT_ERROR";

// export const logoutAction = createAsyncAction(LOGOUT, LOGOUT_SUCCESS, LOGOUT_ERROR)<undefined, LoginState, AxiosError>();

export const ADD_CATEGORY = "ADD_CATEGORY";
export const ADD_CATEGORY_SUCCESS = "ADD_CATEGORY_SUCCESS";
export const ADD_CATEGORY_ERROR = "ADD_CATEGORY_ERROR";

// export const addCategoryAction = createAsyncAction(ADD_CATEGORY, ADD_CATEGORY_SUCCESS, ADD_CATEGORY_ERROR)<
//   [string, string],
//   LoginState,
//   AxiosError
// >();

export const GET_CATEGORY = "GET_CATEGORY";
export const GET_CATEGORY_SUCCESS = "GET_CATEGORY_SUCCESS";
export const GET_CATEGORY_ERROR = "GET_CATEGORY_ERROR";

// export const getCategoryAction = createAsyncAction(GET_CATEGORY, GET_CATEGORY_SUCCESS, GET_CATEGORY_ERROR)<any, LoginState, AxiosError>();

export const UPDATE_CATEGORY = "UPDATE_CATEGORY";
export const UPDATE_CATEGORY_SUCCESS = "UPDATE_CATEGORY_SUCCESS";
export const UPDATE_CATEGORY_ERROR = "UPDATE_CATEGORY_ERROR";

// export const updateCategoryAction = createAsyncAction(UPDATE_CATEGORY, UPDATE_CATEGORY_SUCCESS, UPDATE_CATEGORY_ERROR)<
//   [string | any[], string],
//   LoginState,
//   AxiosError
// >();

export const DELETE_CATEGORY = "DELETE_CATEGORY";
export const DELETE_CATEGORY_SUCCESS = "DELETE_CATEGORY_SUCCESS";
export const DELETE_CATEGORY_ERROR = "DELETE_CATEGORY_ERROR";

// export const deleteCategoryAction = createAsyncAction(DELETE_CATEGORY, DELETE_CATEGORY_SUCCESS, DELETE_CATEGORY_ERROR)<
//   string[],
//   LoginState,
//   AxiosError
// >();

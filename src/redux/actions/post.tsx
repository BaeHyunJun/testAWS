import { createAsyncAction, deprecated } from "typesafe-actions";
import { elementLine } from "@config/const";
import { AxiosError } from "axios";

const { createStandardAction } = deprecated;

export type state = {
	[type: string]: any;
};

export const POST_SET = "POST_SET";

export const setPost = createStandardAction(POST_SET)<elementLine[], state>();

export const PRIVATE_POST = "PRIVATE_POST";
export const PRIVATE_POST_SUCCESS = "PRIVATE_POST_SUCCESS";
export const PRIVATE_POST_ERROR = "PRIVATE_POST_ERROR";

export const privatePostAction = createAsyncAction(PRIVATE_POST, PRIVATE_POST_SUCCESS, PRIVATE_POST_ERROR)<any, state, AxiosError>();

export const POST = "POST";
export const POST_SUCCESS = "POST_SUCCESS";
export const POST_ERROR = "POST_ERROR";

export const postAction = createAsyncAction(POST, POST_SUCCESS, POST_ERROR)<any, state, AxiosError>();

export const GET_POST = "GET_POST";
export const GET_POST_SUCCESS = "GET_POST_SUCCESS";
export const GET_POST_ERROR = "GET_POST_ERROR";

export const getPostAction = createAsyncAction(GET_POST, GET_POST_SUCCESS, GET_POST_ERROR)<any, any, AxiosError>();

export const ADD_FORM_USER = "ADD_FORM_USER";
export const ADD_FORM_USER_SUCCESS = "ADD_FORM_USER_SUCCESS";
export const ADD_FORM_USER_ERROR = "ADD_FORM_USER_ERROR";

export const addFormUserAction = createAsyncAction(ADD_FORM_USER, ADD_FORM_USER_SUCCESS, ADD_FORM_USER_ERROR)<any, any, AxiosError>();

export const GET_FORM_USER = "GET_FORM_USER";
export const GET_FORM_USER_SUCCESS = "GET_FORM_USER_SUCCESS";
export const GET_FORM_USER_ERROR = "GET_FORM_USER_ERROR";

export const getFormUserAction = createAsyncAction(GET_FORM_USER, GET_FORM_USER_SUCCESS, GET_FORM_USER_ERROR)<any, any, AxiosError>();
import { createReducer } from "typesafe-actions";

import {
	POST,
	POST_SUCCESS,
	POST_ERROR,
	POST_SET,
	GET_POST,
	GET_POST_SUCCESS,
	GET_POST_ERROR,
	PRIVATE_POST,
	PRIVATE_POST_SUCCESS,
	PRIVATE_POST_ERROR,
	GET_FORM_USER,
	GET_FORM_USER_SUCCESS,
	ADD_FORM_USER,
	ADD_FORM_USER_SUCCESS, ADD_FORM_USER_ERROR, GET_FORM_USER_ERROR
} from "@actions/post";
import { sampleList, postAction, elementLine } from "@config/const";

const initData = {
	line: [], //sampleList
}

const post = createReducer<any, postAction>(initData, {
	[ADD_FORM_USER]:(state, action) => ({
		...state,
	}),
	[ADD_FORM_USER_SUCCESS]:(state, action) => ({
		...state,
		result: action.payload,
		// user: action.payload,
	}),
	[ADD_FORM_USER_ERROR]:(state, action) => ({
		...state,
	}),
	[GET_FORM_USER]:(state, action) => ({
		...state,
	}),
	[GET_FORM_USER_SUCCESS]:(state, action) => ({
		...state,
		user: action.payload,
	}),
	[GET_FORM_USER_ERROR]:(state, action) => ({
		...state,
	}),
	[PRIVATE_POST]: (state, action) => ({
		...state,
		// line: action.payload
	}),
	[PRIVATE_POST_SUCCESS]: (state, action) => ({
		...state,
		// title: action.payload.title,
		// type: action.payload.type,
		line: action.payload,
	}),
	[PRIVATE_POST_ERROR]: (state, action) => ({
		...state,
	}),
	[GET_POST]: (state, action) => ({
		...state,
		// line: action.payload
	}),
	[GET_POST_SUCCESS]: (state, action) => ({
		...state,
		title: action.payload.title,
		type: action.payload.type,
		line: action.payload.content,
		thumbnail: action.payload.thumbnail,
	}),
	[GET_POST_ERROR]: (state, action) => ({
		...state,
	}),
	[POST_SET]: (state, action) => ({
		...state,
		// line: action.payload
	}),
	[POST]: (state, action) => ({
		// action.payload
		...state,
		// line: action.payload
		// filter: {
		// 	...state.filter,
		// 	[action.payload]: action.meta,
		// },
	}),
	[POST_SUCCESS]: (state, action) => ({
		// action.payload
		...state,
		// title: action.payload.title,
		// type: action.payload.type,
		// line: action.payload.content,
		// line: action.payload
		// filter: {
		// 	...state.filter,
		// 	[action.payload]: action.meta,
		// },
	}),
	[POST_ERROR]: (state, action) => ({
		// action.payload
		...state,
		// filter: {
		// 	...state.filter,
		// 	[action.payload]: action.meta,
		// },
	}),
});

export default post;

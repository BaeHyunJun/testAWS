import { createReducer } from "typesafe-actions";

// import { commonSearchFilterState, CommonAction } from "@src/types";
// import { COMMON_SEARCH_FILTER } from "@actions/common";
//
// const initialState: commonSearchFilterState = {
//   filter: {
//     status: {},
//     type: {},
//     range: {},
//     step: {},
//     court: {},
//     special: {},
//     price: {},
//     gye: {},
//     address: {},
//   },
// };
//
// const common = createReducer<commonSearchFilterState, CommonAction>(initialState, {
//   [COMMON_SEARCH_FILTER]: (state, action) => ({
//     ...state,
//     filter: {
//       ...state.filter,
//       [action.payload]: action.meta,
//     },
//   }),
// });
//
// export default common;

import { AnyAction, combineReducers } from "redux";
// import products from "@redux/reducers/products";
// import search from "@redux/reducers/search";
// import common from "@redux/reducers/common";
// import user from "@redux/reducers/user";
import { all, call } from "redux-saga/effects";
import postsSaga from "@redux/middleware/saga";
import { HYDRATE } from "next-redux-wrapper";

const rootReducer = (state: any, action: AnyAction) => {
  switch (action.type) {
    case HYDRATE:
      return action.payload;
    default: {
      const combineReducer = combineReducers({
        // products,
        // search,
        // common,
        // user,
      });

      return combineReducer(state, action);
    }
  }
};

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

export function* rootSaga() {
  yield all([postsSaga()]);
}

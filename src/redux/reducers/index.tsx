import { AnyAction, combineReducers } from "redux";
import post from "@redux/reducers/post";
import { all, call } from "redux-saga/effects";
import postsSaga from "@redux/middleware/saga";
import { HYDRATE } from "next-redux-wrapper";

const rootReducer = (state: any, action: AnyAction) => {
  switch (action.type) {
    case HYDRATE:
      return action.payload;
    default: {
      const combineReducer = combineReducers({
        post,
      });

      // @ts-ignore
      return combineReducer(state, action);
    }
  }
};

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

export function* rootSaga() {
  yield all([postsSaga()]);
}

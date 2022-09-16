import rootReducer, { rootSaga } from "@redux/reducers";
import { createStore, applyMiddleware, Store } from "redux";
import { createWrapper } from "next-redux-wrapper";
import createSagaMiddleware, { Task } from "redux-saga";
import { createBrowserHistory } from "history";

export interface SagaStore extends Store {
  sagaTask?: Task;
}

export const makeStore = () => {
  let customHistory;

  if (typeof window == "object") {
    const customHistory = createBrowserHistory();
  }

  // 1: Create the middleware
  const sagaMiddleware = createSagaMiddleware({
    context: {
      history: customHistory,
    },
  });

  // 2: Add an extra parameter for applying middleware:
  const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

  // 3: Run your sagas on server
  (store as SagaStore).sagaTask = sagaMiddleware.run(rootSaga);

  // 4: now return the store:
  return store;
};

export const wrapper = createWrapper<SagaStore>(makeStore as any);

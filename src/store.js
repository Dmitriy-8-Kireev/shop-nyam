import { createStore, compose, applyMiddleware } from "redux";
import logger from "redux-logger";
import reducer from "./reducers";

const store = createStore(
  reducer,
  compose(
    applyMiddleware(logger),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;

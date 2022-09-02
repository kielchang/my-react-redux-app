import { configureStore } from "@reduxjs/toolkit";
import reducer from "../reducers";
// import createSagaMiddleware from "redux-saga";
// import rootSaga from "../saga";
import middlewares from "../middlewares";

// const saga = createSagaMiddleware();

const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== "production",
  // middleware: [saga],
  middleware: [...middlewares],
});

// saga.run(rootSaga);

export default store;

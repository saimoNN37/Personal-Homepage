import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import { portfolioReducer } from "../Homepage/Portfolio/portfolioSlice"
import rootSaga from "./rootSaga";
import { themeReducer } from "../common/ThemeSwitcher/themeSwitchSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    portfolio: portfolioReducer,
    themeSwitch: themeReducer
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
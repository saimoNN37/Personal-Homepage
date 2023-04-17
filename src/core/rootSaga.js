import { all } from "redux-saga/effects";
import { watchFetchPortfolio } from "../Homepage/Portfolio/portfolioSaga";


export default function* rootSaga() {
  yield all([watchFetchPortfolio()]);
}
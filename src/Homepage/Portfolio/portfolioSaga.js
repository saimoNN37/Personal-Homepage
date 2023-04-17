import { call, put, takeLatest, delay } from "redux-saga/effects";
import { getRepos } from "./getRepos";
import { fetchPortfolio, fetchPortfolioError, fetchPortfolioSuccess } from "./portfolioSlice";

function* fetchPortfolioHandler() {
    try{
        yield delay(1500);
        const repositories = yield call(getRepos);
        yield put(fetchPortfolioSuccess(repositories));
    } catch (error) {
        yield put(fetchPortfolioError());
    }
}

export function* watchFetchPortfolio() {
    yield takeLatest(fetchPortfolio.type, fetchPortfolioHandler);
}
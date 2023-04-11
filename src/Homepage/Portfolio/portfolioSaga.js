import { call, put, takeLatest, delay } from "redux-saga/effects";
import { getPortfolio } from "./getPortfolio";
import { githubAPIUrl } from "./githubData";
import { fetchPortfolio, fetchPortfolioError, fetchPortfolioSuccess } from "./portfolioSlice";

function* fetchPortfolioHandler() {
    try{
        yield delay(1500);
        const portfolio = yield call(getPortfolio, githubAPIUrl);
        yield put(fetchPortfolioSuccess(portfolio));
    } catch (error) {
        yield put(fetchPortfolioError());
    }
}

export function* watchFetchPortfolio() {
    yield takeLatest(fetchPortfolio.type, fetchPortfolioHandler);
}
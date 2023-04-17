import { createSlice } from "@reduxjs/toolkit";

const portfolioSlice = createSlice({
    name: "portfolio",
    initialState: {
        status: "initial",
        repositories: null,
    },
    reducers: {
        fetchPortfolio: () => ({
            status: "loading",
            repositories: null,
        }),
        fetchPortfolioSuccess: (_, {payload: repositories}) => ({
            status: "success",
            repositories,
        }),
        fetchPortfolioError: () => ({
            status: "error",
            repositories: null,
        }),
    }
});

export const {fetchPortfolio, fetchPortfolioError, fetchPortfolioSuccess} = portfolioSlice.actions;

const selectPortfolioState = state => state.portfolio;
export const selectRepositories = state => selectPortfolioState(state).repositories;
export const selectRepositoriesStatus = state => selectPortfolioState(state).status;

export const portfolioReducer = portfolioSlice.reducer;

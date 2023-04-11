import { createSlice } from "@reduxjs/toolkit";

const portfolioSlice = createSlice({
    name: "portfolio",
    initialState: {
        portfolioState: "initial",
        portfolioList: "null",
    },
    reducers: {
        fetchPortfolio: (state) => {
            state.portfolioState = "loading";
        },
        fetchPortfolioSuccess: (state, {payload}) => {
            state.portfolioState = "success",
            state.portfolioList = payload;
        },
        fetchPortfolioError: (state) => {
            state.portfolioState = "error";
        }
    }
});

export const {fetchPortfolio, fetchPortfolioError, fetchPortfolioSuccess} = portfolioSlice.actions;

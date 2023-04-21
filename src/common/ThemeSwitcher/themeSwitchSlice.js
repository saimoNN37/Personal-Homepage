import { createSlice } from "@reduxjs/toolkit";

const themeSwitchSlice = createSlice({
    name: "theme",
    initialState: {
        darkModeOff: false,
    },
    reducers: {
        toogleTheme: (state) => {
            state.darkModeOff = !state.darkModeOff;
        },
    },
});

export const { toogleTheme } = themeSwitchSlice.actions;

const selectThemeState = (state) => state.themeSwitch;

export const selectIsDarkTheme = (state) => selectThemeState(state).darkModeOff;

export const themeReducer = themeSwitchSlice.reducer;

import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice';
import moviesReducer from './moviesSlice';
import modeReducer from "./switchModeSlice";
import tvSeriesReducer from "./tvSeriesSlice";

const appStore = configureStore({
    reducer: {
        user:userReducer,
        movies:moviesReducer,
        switchMode:modeReducer,
        tvSeries:tvSeriesReducer,
    }
})


export default appStore;
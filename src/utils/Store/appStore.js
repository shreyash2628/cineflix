import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice';
import moviesReducer from './moviesSlice';
import modeReducer from "./switchModeSlice";
import tvSeriesReducer from "./tvSeriesSlice";
import gptSearchedReducer from './GptSearchedSlice';

const appStore = configureStore({
    reducer: {
        user:userReducer,
        movies:moviesReducer,
        switchMode:modeReducer,
        tvSeries:tvSeriesReducer,
        gptSearchedValue:gptSearchedReducer,
    }
})


export default appStore;
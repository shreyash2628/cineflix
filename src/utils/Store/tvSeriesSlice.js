import { createSlice } from "@reduxjs/toolkit";

const tvSeriesSlice = createSlice({
    name:"tvSeriesSlice",
    initialState:{
        upComingTvSeries:null,
        topRatedTvSeries:null,
        popularTvSeries:null,
        nowPlayingTvSeries:null,
    },
    reducers:{
        addUpcomingTvSeries : (state,action)=>{
            state.upComingTvSeries=action.payload;
        },
        addTopRatedTvSeries : (state,action)=>{
            state.topRatedTvSeries = action.payload;
        }, 
        addPopularTvSeries : (state,action)=>{
            state.popularTvSeries = action.payload;
        },  
        addNowPlayingTvSeries : (state,action)=>{
            state.nowPlayingTvSeries = action.payload;
        },
    }
})

export const {addUpcomingTvSeries,addTopRatedTvSeries,addPopularTvSeries,addNowPlayingTvSeries} = tvSeriesSlice.actions;
export default tvSeriesSlice.reducer;
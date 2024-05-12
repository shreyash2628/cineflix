import { createSlice } from "@reduxjs/toolkit";

const tvSeriesSlice = createSlice({
    name:"tvSeriesSlice",
    initialState:{
        trailerVideo:null,
        upcomingTvSeries:null,
        topRatedTvSeries:null,
    },
    reducers:{
        addTvSeriesTrailerVideo : (state,action)=>{
            state.trailerVideo = action.payload;
        },
        addUpcomingTvSeries : (state,action)=>{
            state.upcomingTvSeries=action.payload;
        },
        addTopRatedTvSeries : (state,action)=>{
            state.topRatedTvSeries = action.payload;
        },  
    }
})

export const {addUpcomingTvSeries,addTvSeriesTrailerVideo,addTopRatedTvSeries} = tvSeriesSlice.actions;
export default tvSeriesSlice.reducer;
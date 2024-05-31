import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState:{
        upcomingMovies:null,
        topRatedMovies:null,
        nowPlayingMovies:null,
        popularMovies:null,
    },
    reducers:{
        addUpcomingMovies: (state,action)=>{
            state.upcomingMovies=action.payload;
        },
        
        addTopRatedMovies : (state,action)=>{
            state.topRatedMovies = action.payload;
        },
        addNowPlayingMovies : (state,action)=>{
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies : (state,action)=>{
            state.popularMovies = action.payload;
        },
    },
});

export const {addUpcomingMovies,addTopRatedMovies,addNowPlayingMovies,addPopularMovies} = movieSlice.actions;
export default movieSlice.reducer;
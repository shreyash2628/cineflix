import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState:{
        upcomingMovies:null,
        trailerVideo:null,
        topRatedMovies:null,
    },
    reducers:{
        addUpcomingMovies: (state,action)=>{
            state.upcomingMovies=action.payload;
        },
        addMovieTrailerVideo : (state,action)=>{
            state.trailerVideo = action.payload;
        },
        addTopRatedMovies : (state,action)=>{
            state.topRatedMovies = action.payload;
        },
    },
});

export const {addUpcomingMovies,addMovieTrailerVideo,addTopRatedMovies} = movieSlice.actions;
export default movieSlice.reducer;
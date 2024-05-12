import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState:{
        upcomingMovies:null,
        trailerVideo:null,
    },
    reducers:{
        addUpcomingMovies: (state,action)=>{
            state.upcomingMovies=action.payload;
        },
        addMovieTrailerVideo : (state,action)=>{
            state.trailerVideo = action.payload;
        },
    },
});

export const {addUpcomingMovies,addMovieTrailerVideo} = movieSlice.actions;
export default movieSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";
const contentSlice = createSlice({
    name:'content',
    initialState:{
        contentName:null,
        contentId:null,
        contentVote:null,
        contentOverview:null,
        contentImdbId:null,
    },
    reducers:{
        addContent:(state,action)=>{
          state.contentName=action.payload.name;
          state.contentId=action.payload.id;
          state.contentVote=action.payload.vote; 
          state.contentOverview=action.payload.overview; 
        },
        addImdbId:(state,action)=>{
            state.contentImdbId=action.payload;
        },
    }
});

export const { addContent ,addImdbId } = contentSlice.actions;
export default contentSlice.reducer;
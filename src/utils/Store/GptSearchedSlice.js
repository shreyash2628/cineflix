import { createSlice } from "@reduxjs/toolkit";

const GptSearchedValueSlice = createSlice({
    name: 'GptSearchedValue',
    initialState: {
        value: "",
        showShimmer:false,
        content: [],
        contentName: "",
    },
    reducers: {
        addGptSearchedValue: (state, action) => {
            state.value = action.payload;
        },
        addGptSearchedContent: (state, action) => {
            state.content =  action.payload;
        },
        addGPTResult: (state, action) => {
            state.contentName = [...state.contentName, action.payload];
        },
        addShowShimmer:(state,action) =>{
            state.showShimmer = action.payload;
        }
    }
})

export const { addGptSearchedValue, addGptSearchedContent, addGPTResult ,addShowShimmer } = GptSearchedValueSlice.actions;
export default GptSearchedValueSlice.reducer;
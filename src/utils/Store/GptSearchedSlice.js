import { createSlice } from "@reduxjs/toolkit";

const GptSearchedValueSlice = createSlice({
    name:'GptSearchedValue',
    initialState:{
        value:"",
        content:"",
    },
    reducers:{
        addGptSearchedValue: (state, action) => {
            state.value = action.payload;
        },
        addSearchedContent: (state, action) => {
            state.content = action.payload;
        },
    }
})

export const { addGptSearchedValue,addSearchedContent } = GptSearchedValueSlice.actions;
export default GptSearchedValueSlice.reducer;
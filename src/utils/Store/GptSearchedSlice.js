import { createSlice } from "@reduxjs/toolkit";

const GptSearchedValueSlice = createSlice({
    name:'GptSearchedValue',
    initialState:{
        value:"",
    },
    reducers:{
        addGptSearchedValue: (state, action) => {
            state.value = action.payload;
        },
    }
})

export const { addGptSearchedValue } = GptSearchedValueSlice.actions;
export default GptSearchedValueSlice.reducer;
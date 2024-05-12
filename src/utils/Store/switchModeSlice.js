import { createSlice } from "@reduxjs/toolkit";

const switchModeSlice = createSlice({
    name: "switchMode",
    initialState: {
        mode: "movies",
    },
    reducers: {
        addSwitchMode: (state,action) => {
            state.mode=action.payload;
        },

    },
})


export const { addSwitchMode } = switchModeSlice.actions;
export default switchModeSlice.reducer;
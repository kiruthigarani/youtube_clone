import { createSlice } from "@reduxjs/toolkit";

const toggleSlice = createSlice({
    name: "toggle",
    initialState: {
        isOpen: true
    },
    reducers: {
        toggle: (state) => {
            state.isOpen = !state.isOpen;
        }
    }
});

export default toggleSlice.reducer;
export const {toggle} = toggleSlice.actions;